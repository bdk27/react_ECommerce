/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBrown: "#5c3411",
        mainBeige: "#F5DEB3",
        softOrangeBrown: "#e1af7a",
        softGold: "#f3d08c",
        mutedGreen: "#afb6a4",
        lightKhaki: "#d5c6a9",
        lightPink: "#FFB6C1",
        lightBeige: "#f0e3d1",
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
