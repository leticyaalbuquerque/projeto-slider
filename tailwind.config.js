/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "index.html", "script.js"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'clear': '#F2F2F2',
        'grayish-blue': '#BABACF',
        'dark-blue': '#202046'
      }
    },
  },
  plugins: [],
}
