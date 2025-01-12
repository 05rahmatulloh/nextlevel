/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sec1: "'Open Sans', sans-serif",
        roboto: "Roboto",
        poppins: "Poppins",
        monserat: "Montserrat",
      },
      colors: {
        bg1: "#F1FFFA",
        logo1: "#FF834F",
        bg2: "#121041",
        button_bg_2: "#0f0d38",
      },
    },
  },
  plugins: [],
};
