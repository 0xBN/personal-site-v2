/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: { display: ['inter', 'Open Sans', 'sans-serif'] },
    extend: {
      colors: {
        primaryDark: '#f063c1',
        secondaryDark: '#f7c1ea',
        navDark: '#1e293b',
        primaryLight: '#B5127F',
        secondaryLight: '#9E0000',
        navLight: '#cbd5e1',
        // navLight: '#cbd5e1',
      },
      minHeight: {
        fullScreenMinHeight: 'calc(100vh - 68px)',
        fullScreenLastPage: 'calc(100vh - 148px)',
        fullScreenLastPageDesktop: 'calc(100vh - 80px)',
      },
      keyframes: {
        'spin-custom': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(3600deg)' },
        },
        'bounce-custom': {},
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'spin-slow': 'spin-custom 400s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
