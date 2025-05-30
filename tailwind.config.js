/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FFD1', // Landing page primary color
          light: '#3B82F6',   // App light mode primary
          dark: '#10B981'     // App dark mode primary
        },
        sidebar: {
          light: '#f5f7fa',
          dark: '#0f172a'
        },
        chat: {
          light: '#ffffff',
          dark: '#1e293b'
        },
        message: {
          light: '#f8fafc',
          dark: '#334155'
        },
        border: {
          light: '#e2e8f0',
          dark: '#334155'
        },
        text: {
          light: {
            primary: '#1e293b',
            secondary: '#64748b'
          },
          dark: {
            primary: '#f8fafc',
            secondary: '#94a3b8'
          },
          settings: {
            light: {
              bg: '#ffffff',
              card: '#f8fafc',
              text: '#1e293b',
              border: '#e2e8f0'
            },
            dark: {
              bg: '#0f172a',
              card: '#1e293b',
              text: '#f8fafc',
              border: '#334155'
            }
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        // Landing page animations
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        shine: {
          '0%': { 'background-position': '200% center' },
          '100%': { 'background-position': '-200% center' }
        },
        borderShine: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        // App animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        // Landing page animations
        scroll: 'scroll var(--scroll-duration) linear infinite',
        shine: 'shine 5s linear infinite',
        borderShine: 'borderShine 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        // App animations
        'fade-in': 'fadeIn 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
}