/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'secondSection': "url('../images/crystal-kwok-XUEdfpPIhXg-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}
