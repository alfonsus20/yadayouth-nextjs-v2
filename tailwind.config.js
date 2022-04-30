const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        
      }
    },
    screens: {
      xs: "480px",
      ...screens,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
