/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './blog/index.html', './dist/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#2C73D2',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

