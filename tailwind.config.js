/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#ffe6e6',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000', // Vibrant red
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        dark: {
          900: '#000000',
          800: '#121212',
          700: '#1a1a1a',
          600: '#2c2c2c',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s linear infinite',
      },
    },
  },
  plugins: [],
};