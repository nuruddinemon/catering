/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      grayscale: "#111112",
      white: "#fff",
    },
    backgroundColor: {
      grayscale: "#111112",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        opensans: '"Open Sans", sans-serif',
      },
    },
    screens: {
      xl: "1485px",
      lg: "1220px",
      md: "769px",
      sm: "520px",
    },
  },
  plugins: [],
};

