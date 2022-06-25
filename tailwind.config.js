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
          light: "#696EED",
          lotus: "#686DEC",
        },
        orange: {
          DEFAULT: "#FF4C2E",
          light: "#E14B4B",
        },
        yellow: {
          DEFAULT: "#E5AB1A",
          light: "#FBBB1B",
        },
        green: {
          DEFAULT: "#23B70B",
        },
        red: {
          DEFAULT: "#E14B4B",
          light: "#FF5C5C",
        },
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ...screens,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
