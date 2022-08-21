const colors = require("tailwindcss/colors");

module.exports = {
  jit: true,
  darkMode: "class",
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
      gray: colors.gray,
      black: colors.black
    },
  },
  plugins: [],
};
