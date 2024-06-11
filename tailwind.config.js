/** @type {import('tailwindcss').Config} */
import CustomPlugin from './src/plugins/tailwind';

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
        icons: ['SocialRegular'],
      },
      screens: {
        //'sm': '640px',
        //'md': '768px',
        //'lg': '1024px',
        //'xl': '1280px',
        //'2xl': '1536px',
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
      fontSize: {
        '10xl': ['6.25rem', {lineHeight: '6.25rem'}]
      }
    },
  },
  plugins: [
    plugin(CustomPlugin.writingMode),
    plugin(CustomPlugin.animationDuration),
  ],
};
