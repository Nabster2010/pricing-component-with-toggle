/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gradientFrom: "hsl(236, 72%, 79%)",
        gradientTo: "hsl(237, 63%, 64%)",
        VeryLightGrayishBlue: "hsl(240, 78%, 98%)",
        LightGrayishBlue: "hsl(234, 14%, 74%)",
        GrayishBlue: "hsl(233, 13%, 49%)",
        DarkGrayishBlue: "hsl(232, 13%, 33%)",
      },
      boxShadow: {
        left: " -3px 2px 8px 0px rgba(0,0,0,0.1)",
        right: " 3px 2px 8px 0px rgba(0,0,0,0.1)",
      },
    },
  },

  plugins: [],
};
