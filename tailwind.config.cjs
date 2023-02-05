/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      padding: {
        Mid: "10rem",
      },
      position: {
        Hola: "10%",
      },
    },
  },
  plugins: [],
};
