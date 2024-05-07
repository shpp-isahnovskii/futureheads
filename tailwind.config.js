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
      },
      screens: {
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
};
