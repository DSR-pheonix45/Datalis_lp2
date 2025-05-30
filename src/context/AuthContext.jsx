import { createContext, useContext, useState, useEffect } from 'react';
import { customLogin, customSignUp, testSupabaseConnection } from '../lib/supabase';

// Create context with default values
const AuthContext = createContext({
  user: null,
  loading: true,
  isOnline: true,
  isAuthenticated: false,
  signup: async () => ({ success: false }),
  login: async () => ({ success: false }),
  signOut: () => {}
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  // Local storage key
  const USER_STORAGE_KEY = 'datalis_user';

  // Check online status
  useEffect(() => {
    const checkConnection = async () => {
      const online = await testSupabaseConnection();
      setIsOnline(online);
    };
    
    checkConnection();
    
    // Also check when the app comes back online
    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', () => setIsOnline(false));
    
    return () => {
      window.removeEventListener('online', checkConnection);
      window.removeEventListener('offline', () => setIsOnline(false));
    };
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem(USER_STORAGE_KEY);
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error loading user from storage:', error);
        localStorage.removeItem(USER_STORAGE_KEY);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const signup = async (email, password, username) => {
    try {
      setLoading(true);
      const result = await customSignUp(email, password, username);
      
      // If signup was successful and returned a user, log them in automatically
      if (result.success && result.user) {
        setUser(result.user);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(result.user));
      }
      
      return result;
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: 'An unexpected error occurred during signup.' };
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const result = await customLogin(email, password);
      
      if (result.success && result.user) {
        setUser(result.user);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(result.user));
        return { success: true };
      }
      
      return result;
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An unexpected error occurred during login.' };
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    setUser(null);
  };

  const value = {
    user,
    loading,
    isOnline,
    isAuthenticated: !!user,
    signup,
    login,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
