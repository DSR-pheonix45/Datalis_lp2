import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log for debugging (remove in production)
console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set');
console.log('Supabase Key:', supabaseAnonKey ? 'Set' : 'Not set');

// Create Supabase client with proper error handling
let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase credentials are missing. Using offline mode only.');
    // Create a mock client
    supabase = createOfflineClient();
} else {
    try {
        // Create the real client with the API key
        supabase = createClient(supabaseUrl, supabaseAnonKey, {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
            }
        });
        console.log('Supabase client initialized');
    } catch (error) {
        console.error('Failed to initialize Supabase client:', error);
        supabase = createOfflineClient();
    }
}

// Create an offline client for fallback
function createOfflineClient() {
    return {
        from: () => ({
            select: () => Promise.resolve({ data: null, error: { message: 'Offline mode' } }),
            insert: () => Promise.resolve({ data: null, error: { message: 'Offline mode' } }),
            update: () => Promise.resolve({ data: null, error: { message: 'Offline mode' } }),
            delete: () => Promise.resolve({ data: null, error: { message: 'Offline mode' } }),
            eq: () => ({ maybeSingle: () => Promise.resolve({ data: null, error: { message: 'Offline mode' } }) })
        }),
        auth: {
            signUp: () => Promise.resolve({ data: null, error: { message: 'Offline mode' } }),
            signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Offline mode' } }),
            signOut: () => Promise.resolve({ error: null })
        }
    };
}

export { supabase };

// Local storage keys
const FALLBACK_USERS_KEY = 'datalis_fallback_users';

// Helper functions for local storage
const getFallbackUsers = () => {
    try {
        return JSON.parse(localStorage.getItem(FALLBACK_USERS_KEY) || '[]');
    } catch (error) {
        console.error('Error reading fallback users:', error);
        return [];
    }
};

const saveFallbackUsers = (users) => {
    localStorage.setItem(FALLBACK_USERS_KEY, JSON.stringify(users));
};

// Test connection function with better error handling
export const testSupabaseConnection = async () => {
    if (!supabaseUrl || !supabaseAnonKey) {
        console.log('Supabase credentials missing, skipping connection test');
        return false;
    }

    try {
        // Use a simpler health check instead of querying tables
        const response = await fetch(`${supabaseUrl}/rest/v1/`, {
            headers: {
                'apikey': supabaseAnonKey,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Supabase connected successfully');
            return true;
        } else {
            console.error('Supabase connection error:', response.status);
            return false;
        }
    } catch (err) {
        console.error('Supabase connection test failed:', err);
        return false;
    }
};

// Custom signup function with guaranteed fallback
export const customSignUp = async (email, password, username) => {
    console.log('Starting signup process for:', email);

    // Always check local storage first
    const existingUsers = getFallbackUsers();
    if (existingUsers.some(user => user.email === email)) {
        return { success: false, error: 'User with this email already exists.' };
    }

    // Try online mode first if credentials exist
    if (supabaseUrl && supabaseAnonKey) {
        try {
            const isConnected = await testSupabaseConnection();

            if (isConnected) {
                console.log('Using Supabase for signup');
                const { data: authData, error: authError } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            username
                        },
                        emailRedirectTo: undefined // Remove email verification
                    }
                });

                if (!authError && authData?.user) {
                    console.log('User created in Supabase Auth');

                    // Create profile
                    const { error: profileError } = await supabase
                        .from('profiles')
                        .insert({
                            id: authData.user.id,
                            email: email,
                            username: username,
                            password_hash: btoa(password),
                            created_at: new Date().toISOString()
                        });

                    if (profileError) {
                        console.error('Profile creation error:', profileError);
                    } else {
                        console.log('Profile created successfully');
                    }

                    return {
                        success: true,
                        message: 'Account created successfully!',
                        user: {
                            id: authData.user.id,
                            email: authData.user.email,
                            user_metadata: { username: username }
                        }
                    };
                } else {
                    console.error('Auth signup error:', authError);
                }
            }
        } catch (error) {
            console.error('Online signup error:', error);
        }
    }

    // Fallback to offline mode
    console.log('Using offline mode for signup');
    const newUser = {
        id: `local_${Date.now()}`,
        email,
        username,
        password_hash: btoa(password),
        created_at: new Date().toISOString()
    };

    existingUsers.push(newUser);
    saveFallbackUsers(existingUsers);

    return {
        success: true,
        message: 'Account created in offline mode!',
        user: {
            id: newUser.id,
            email: newUser.email,
            user_metadata: { username: newUser.username }
        }
    };
};

// Check if email exists in Supabase
export const checkEmailExists = async (email) => {
    if (!email) return false;

    try {
        // First try to check in auth.users (this is more reliable)
        const { data, error } = await supabase.auth.admin.listUsers({
            filter: {
                email: email
            }
        }).catch(() => {
            // If admin API fails, fallback to profiles table
            return supabase
                .from('profiles')
                .select('email')
                .eq('email', email)
                .maybeSingle();
        });

        if (error) {
            console.error('Error checking email:', error);

            // Fallback to a simpler query if the above fails
            const { data: userData, error: userError } = await supabase
                .from('users')
                .select('email')
                .eq('email', email)
                .maybeSingle();

            if (userError) {
                console.error('Fallback email check failed:', userError);
                return false;
            }

            return !!userData;
        }

        return !!data && (Array.isArray(data) ? data.length > 0 : true);
    } catch (err) {
        console.error('Email check failed:', err);
        return false;
    }
}

// Custom login function with better error handling
export const customLogin = async (email, password) => {
    console.log('Attempting login for:', email);

    // Always check local storage first for faster login
    const fallbackUsers = getFallbackUsers();
    const localUser = fallbackUsers.find(u => u.email === email);

    if (localUser && btoa(password) === localUser.password_hash) {
        console.log('Local user found, logging in');
        return {
            success: true,
            user: {
                id: localUser.id,
                email: localUser.email,
                user_metadata: { username: localUser.username || email.split('@')[0] }
            }
        };
    }

    // Try online mode if credentials exist
    if (supabaseUrl && supabaseAnonKey) {
        try {
            const isConnected = await testSupabaseConnection();

            if (isConnected) {
                console.log('Using Supabase for login');

                // Try with Supabase auth
                const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                    email,
                    password
                });

                if (!authError && authData?.user) {
                    console.log('Supabase Auth login successful');
                    return {
                        success: true,
                        user: {
                            id: authData.user.id,
                            email: authData.user.email,
                            user_metadata: authData.user.user_metadata || { username: email.split('@')[0] }
                        }
                    };
                } else {
                    console.error('Supabase Auth login error:', authError);

                    // Check if error indicates email not confirmed
                    if (authError.message.includes('Email not confirmed')) {
                        return { success: false, error: 'Email not confirmed. Please check your email for verification link.' };
                    }

                    // Check if error indicates user doesn't exist
                    if (authError.message.includes('Invalid login credentials') ||
                        authError.message.includes('user not found')) {
                        return { success: false, error: 'Email not registered. Please sign up first.' };
                    }

                    return { success: false, error: 'Invalid email or password.' };
                }
            }
        } catch (error) {
            console.error('Online login error:', error);
        }
    }

    // If we got here, login failed
    return { success: false, error: 'Invalid email or password.' };
};

// Add an alias for customSignUp to handle potential case sensitivity issues
export const customSignup = customSignUp;










