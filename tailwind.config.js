/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans TC', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
        'container-sm': '1024px',
        'container-lg': '1536px',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-light': 'bounceSlight 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSlight: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.container-center': {
          'max-width': '1280px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@media (min-width: 640px)': {
            'padding-left': '1.5rem',
            'padding-right': '1.5rem',
          },
          '@media (min-width: 1024px)': {
            'padding-left': '2rem',
            'padding-right': '2rem',
          },
        },
        '.container-center-wide': {
          'max-width': '1536px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@media (min-width: 640px)': {
            'padding-left': '1.5rem',
            'padding-right': '1.5rem',
          },
          '@media (min-width: 1024px)': {
            'padding-left': '2rem',
            'padding-right': '2rem',
          },
        },
        '.container-center-narrow': {
          'max-width': '1024px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@media (min-width: 640px)': {
            'padding-left': '1.5rem',
            'padding-right': '1.5rem',
          },
          '@media (min-width: 1024px)': {
            'padding-left': '2rem',
            'padding-right': '2rem',
          },
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
