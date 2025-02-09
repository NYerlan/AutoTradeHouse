/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3C3B6E", // Blue
        secondary: "#B22234", // Red
        background: "#F5F5F5", // Light gray
      },
    },
  },
  plugins: [],
};
