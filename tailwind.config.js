/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    fontFamily:{
      "dance":["dancing script", "cursive"],
      "nunito":["Nunito", "sans-serif"]
    },
    colors: {
      // page1
      primary: "#6fdcbf",
      darkPrimary: "#774069",
      secPrimary: "#f6f4f6",
      secDarkPrimary: "#29272A",
      lightNav: "#F7F7F7",
      darkNav: "#2C2A30",
      mobilePrimary: "#F6F4F6",
      lightModeToggle: "#D2F5FD",
      darkModeToggle: "#85848F",
      fontPrimary: "#404040",
      fontDarkPrimary: "#FAFAFA",
      logoDarkColor: "#B1B1D8",
      logoLightColor: "#6fdcbf",
      // page2
      primary2:"#ae8fdb",
      darkPrimary2:"#4c3a69",
      // page3
      primary3:"#fef8b4",
      darkPrimary3:"#2c2a32"
    },
    extend: {
      boxShadow: {
        '3xl': '10px 10px 5px 0px rgba(0,0,0,1)',
        'darkshadow':'10px 10px 5px 0px rgba(255,255,255,1)',
        'reverselight':'-10px 10px 5px 0px rgba(0,0,0,0.75)',
        'reversedark':'-10px 10px 5px 0px rgba(255,255,255,0.75)',
      }
    },
  },
  plugins: [],
};
