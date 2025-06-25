/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fefdf9',
          100: '#f7f7f7',
          200: '#f0f0f0',
          300: '#e8e8e8',
          400: '#d0d0d0',
          500: '#a8a8a8',
          600: '#808080',
          700: '#666666',
          800: '#333333',
          900: '#1a1a1a',
        },
        accent: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b8d0e8',
          300: '#95badd',
          400: '#8b9dc3',
          500: '#6b7fa8',
          600: '#4a628d',
          700: '#334771',
          800: '#1f2e56',
          900: '#0f1a3a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};