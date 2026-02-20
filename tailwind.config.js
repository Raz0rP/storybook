/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#efc712',
        plum: '#3a1c33',
        'grey-extra-light': '#f5f5f5',
        'grey-default': '#8c8c8c',
        'grey-dark': '#646464',
      },
      fontFamily: {
        brockmann: ['Brockmann', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

