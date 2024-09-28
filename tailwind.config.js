/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGold: "#FFD700",
        mainBrown: "#594838",
        mainSkin: "#F4C2C2",
        mainBeige: "#F5DEB3",

        lightGold: "#FFFACD",
        lightPink: "#FFB6C1",
        lightGreen: "#98FB98",
        lightBrown: "#f0e3d1",
        lightGold2: "#D4AF37",
        lightBlue: "#A3C1AD",
      },
    },
  },
  plugins: [],
};
