/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

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
        'running-forward': 'forward-n-back 60s ease-in-out Infinite alternate',
        'running-backward': 'back-n-forward 70s ease-in-out Infinite alternate',
      },
      keyframes: {
        'forward-n-back': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%) translateX(100vw)' },
        },
        'back-n-forward': {
          '0%': { transform: 'translateX(-100%) translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, addUtilities }) => {
      matchUtilities({
        'animation-duration': (value) => {
          return {
            'animation-duration': value,
          };
        },
      });
      addUtilities({
        '.animation-paused': { 'animation-play-state': 'paused' },
      });
    }),
  ],
};
