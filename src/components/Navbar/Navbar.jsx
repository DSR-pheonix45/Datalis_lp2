import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { User, LogOut, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, signOut } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const ThemeToggle = () => (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-800/20 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );

  useEffect(() => {
    const handleScroll = () => {
      // Only show background when scrolling down
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > (handleScroll.prev || 0);
      handleScroll.prev = scrollTop;

      if (isScrollingDown) {
        setIsScrolled(scrollTop > 20);
      } else {
        // When scrolling up, keep the background if we're far down the page
        setIsScrolled(scrollTop > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.prev = 0;
    };
  }, []);

  const handleSignOut = async () => {
    setIsProfileOpen(false);
    // Change from logout() to signOut() to match the function name in AuthContext
    const result = await signOut();
    if (result?.success) {
      navigate('/');
    } else {
      // Handle case where signOut doesn't return a result object
      navigate('/');
    }
  };

  const openDemoPage = () => {
    window.open('https://huggingface.co/spaces/medhansh-k/Dabby', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070B14]/95 backdrop-blur-sm border-b border-[#00FFD1]/10 shadow-[0_4px_30px_rgba(0,255,209,0.1)]' 
          : 'bg-gradient-to-b from-[#070B14]/50 to-transparent backdrop-blur-none border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/Datalis1.png"
                alt="Datalis Logo" 
                className="w-16 h-16 object-contain"
              />
            </Link>
            <Link to="/" className="text-3xl font-semibold text-white/90 hover:text-[#00FFD1] transition-colors">
              Datalis
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/agents" label="Agents" />
            <NavLink to="/pricing" label="Pricing" />
            <NavLink to="/career" label="Careers" />

            {/* Auth Buttons - Dynamic based on auth state */}
            <div className="flex items-center space-x-4 ml-4 border-l border-white/10 pl-4">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 px-4 py-2 text-white hover:text-[#00FFD1] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
                      {user?.email?.[0].toUpperCase() || <User size={16} />}
                    </div>
                    <span className="hidden lg:inline">{user?.user_metadata?.username || user?.email?.split('@')[0] || 'User'}</span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isProfileOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsProfileOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 bg-[#0B1221] border border-gray-800 rounded-lg shadow-lg overflow-hidden z-20">
                        <Link 
                          to="/coming-soon" 
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#00FFD1]"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 hover:text-red-300"
                        >
                          <div className="flex items-center">
                            <LogOut size={16} className="mr-2" />
                            Sign out
                          </div>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-6 py-2 text-[#00FFD1] hover:text-[#00FFD1]/80 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-6 py-2 bg-[#00FFD1] text-black rounded-full font-medium hover:bg-[#00FFD1]/90"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// NavLink component with active state
function NavLink({ to, label, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  // If onClick is provided, use it instead of Link
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`text-base font-normal transition-all relative ${
          isActive ? 'text-[#00FFD1]' : 'text-white/90 hover:text-[#00FFD1]'
        }`}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00FFD1]"
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          />
        )}
      </button>
    );
  }

  return (
    <Link
      to={to}
      className={`text-base font-normal transition-all relative ${
        isActive ? 'text-[#00FFD1]' : 'text-white/90 hover:text-[#00FFD1]'
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00FFD1]"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
    </Link>
  );
}
