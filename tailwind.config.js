/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","thankyou.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        "custom-bg": "#FAF9F6",
        // "custom-bg": "#FFF1E6",
        // primary: "#B5734C",
        primary: "#696969",
        secondary: "#252525",
        dark: "#121212",
      },
      screens: {
        "2xl": "1320",
      },
    },
  },
  plugins: [],
};
