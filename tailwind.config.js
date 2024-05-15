/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'main-color': '#68A55B',
        'green-light': '#50A41C',
      }
    },
  },
  plugins: [],
}