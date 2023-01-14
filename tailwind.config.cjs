/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: { 500: '#F2E6D0', 600: '#E1D9C3', 700: '#C9BAA6' },
        optionsGrey: '#150C19',
      },
      fontFamily: {
        western: ['WesternBangBang', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
