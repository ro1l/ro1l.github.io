/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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

