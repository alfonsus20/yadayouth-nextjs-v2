const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#888893",
          light: "#F5F3F3",
        },
        black: {
          light: "#524A4E",
        },
        blue: {
          DEFAULT: "#222AEF",
        },
        orange: {
          DEFAULT: "#FF4C2E",
        },
        yellow: {
          DEFAULT: "#FBBB1B",
        },
        green: {
          DEFAULT: "#23B70B",
        },
      },
    },
    screens: {
      xs: "480px",
      ...screens,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
