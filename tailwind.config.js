/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Melodrama: ["Melodrama-Semibold"],
        TaipeiSansTCBetaLight: ["TaipeiSansTCBeta-Light"],
        TaipeiSansTCBetaRegular: ["TaipeiSansTCBeta-Regular"],
        TaipeiSansTCBetaBold: ["TaipeiSansTCBeta-Bold"],
      },
    },
  },
  plugins: [],
};

