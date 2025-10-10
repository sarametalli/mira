export default {
  darkMode: "media", // così sceglie automaticamente dark/light mode in base alle impostazioni del sistema operativo
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8E94F2",
        secondary: "#7c83f0",
        cwhite: "#F8F8FE",
        cblack: "#03051c",
        hoverblack: "#01020A",
        hoverwhite: "#f7f7ff",
        cgrey: "#babac6",
        darkgrey: "9090a3",
        lightgrey: "e4e4e9",
        neutral: "f2f2f4",
        darkneutral: "e4e4e8"
      },
      fontFamily: {
        calligrapy: ["MonteCarlo", "cursive"],
        titles: ["Montserrat", "sans-serif"],
        p: ["Nunito", "sans-serif"]
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
      },
    },
  },
  plugins: [],
}
