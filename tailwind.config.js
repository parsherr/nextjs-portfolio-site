/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#141414',
        primary: {
          dark: '#3674B5',
          DEFAULT: '#578FCA',
          light: '#A1E3F9',
          lighter: '#D1F8EF',
        },
      },
      keyframes: {
        aurora: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        'aurora-reverse': {
          '0%': { 'background-position': '100% 50%' },
          '50%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' }
        },
        'aurora-slow': {
          '0%': { 'background-position': '50% 50%' },
          '50%': { 'background-position': '-50% 50%' },
          '100%': { 'background-position': '50% 50%' }
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        aurora: 'aurora 8s ease infinite',
        'aurora-reverse': 'aurora-reverse 12s ease infinite',
        'aurora-slow': 'aurora-slow 15s ease infinite',
        'shine': 'shine 1.5s ease-in-out infinite'
      },
    },
  },
  plugins: [],
} 