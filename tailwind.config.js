/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E63E3A',
        black: '#161516',
      },
      fontFamily: {
        gosha: ['PPGoshaSans', 'Verdana', 'Arial', 'sans-serif'],
        gilroy: ['Gilroy-r', 'Verdana', 'Arial', 'sans-serif'],
      },
      screens: {
        '3xl': '1800px',
      },
      animation: {
        'running-text': 'forward-n-back 1s ease-in-out Infinite',
      },
      keyframes: {
        'back-n-forward': {
          '100%': {transform: 'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
};
