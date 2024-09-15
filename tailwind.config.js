/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainYellow: "#f0b825",
        mainOrange: "#ff7232",
        mainPurple: "#9698ff",
      },
    },
  },
  plugins: [],
};
