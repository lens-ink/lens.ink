const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  jit: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      "1/3": "30%",
    },
    colors: {
      transparent: "transparent",
      lens: "#E5FFBE",
      lensDark: "#00501E",
      purple: colors.purple,
      green: colors.green,
      blue: colors.blue,
      stone: colors.stone,
      white: colors.white,
    },
  },
  plugins: [],
};
