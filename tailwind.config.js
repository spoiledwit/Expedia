/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#141c5b",
        "secondary-blue": "#717598",
        "primary-gold": "#e0c98d",
      }
    },
  },
  plugins: [],
}