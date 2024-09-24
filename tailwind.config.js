/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGold: "#FFD700",
        mainPink: "#FF66CC",
        mainGreen: "#50C878",
        lightGold: "#FFFACD",
        lightPink: "#FFB6C1",
        lightGreen: "#98FB98",
      },
    },
  },
  plugins: [],
};
