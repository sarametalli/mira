export default {
  darkMode: "media", // così sceglie automaticamente dark/light mode in base alle impostazioni del sistema operativo
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //versione light
        background: {
          light: "#F8F8FE",
          dark: "#01020A",
        },
        text: {
          light: "#01020A",
          dark: "#F8F8FE",
        },
        imgBg: {
          light: "#8E94F2",
          dark: "#7c83f0",
        },
        primary: "#8E94F2", //primary e secondary sono uguali 
        secondary: "#7c83f0",
      },
      fontFamily: {
        //TODO
      },
      fontSize: {
        //TODO
      }
    },
  },
  plugins: [],
}
