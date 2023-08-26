/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      main: ["Lobster", "cursive"],
      serif: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "font-black": "#1a1818",
        "accent": "#ece7e1",
      },
    },
  },
  plugins: [],
}

