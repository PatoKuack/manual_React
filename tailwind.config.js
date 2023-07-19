/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        roman: 'upper-roman',
      },
      colors: {
        'primary': {
          light: '#0E2954',
          DEFAULT: '#0E2954',
          dark: '#0E2954',
        },
        'secondary': {
          light: '#1F6E8C',
          DEFAULT: '#1F6E8C',
          dark: '#1F6E8C',
        },
        'tertiary': {
          light: '#2E8A99',
          DEFAULT: '#2E8A99',
          dark: '#2E8A99',
        },
        'quaternary': {
          light: '#84A7A1',
          DEFAULT: '#84A7A1',
          dark: '#84A7A1',
        },
        'link': {
          light: '#14532d',
          DEFAULT: '#14532d',
          dark: '#99f6e4',
        },
        'shadow': {
          light: '#66c1ed',
          DEFAULT: '#66c1ed',
          dark: '#065f46',
        },
        'transparent-dark': '#00000026',
        'transparent-false': '#ff6ba945',
        'transparent-true': '#89ff6b45',
      },
      'rotate': {
        
      }
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}

/* https://github.com/sambauers/tailwindcss-3d */
