/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bitfinex-dark': '#0E131D',
        'bitfinex-darker': '#0A0E14',
        'bitfinex-blue': '#1A82FF',
        'bitfinex-light-blue': '#4DA3FF',
        'bitfinex-green': '#26A69A',
        'bitfinex-red': '#FF5252',
        'bitfinex-gray': '#2F3A47',
        'bitfinex-light-gray': '#5C6878',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};