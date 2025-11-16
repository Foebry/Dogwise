/** @type {import("tailwindcss").Config} */
module.exports = {
  important: true,

  // REQUIRED for Turbopack + v4
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#0e7a6f",
        tertiary: "#f16957",
        "color-primary": "#0e7a6f",
        "white-900": "#fff",
        "shadow-100": "#cdcdcd",
        "shadow-500": "#1e1e1e",
      },

      aspectRatio: {
        "3/2": "3 / 2",
        "3/4": "3 / 4",
        "6x": "6 / 1",
        "3x": "3 / 1",
      },

      maxWidth: {
        "5xs": "50px",
        "3xs": "200px",
        "2xs": "300px",
        md: "448px",
        "8xl": "88rem",
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33%",
        "2/5": "40%",
        "1/2": "50%",
        "2/3": "66%",
        "15p": "15%",
        fit: "fit-content",
      },

      minWidth: {
        "4xs": "75px",
        "3xs": "135px",
        "2xs": "200px",
        xs: "350px",
        s: "400px",
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33%",
        "2/5": "40%",
        "1/2": "50%",
        "3/5": "60%",
        "2/3": "66%",
        "3/4": "75%",
        "4/5": "80%",
        full: "100%",
      },

      minHeight: {
        "3xs": "100px",
        "2xs": "200px",
        xs: "350px",
        s: "380px",
        "50vh": "50vh",
        full: "100vh",
        max: "max-content",
        26: "26rem",
      },

      borderRadius: {
        "4xl": "38px",
      },

      boxShadow: {
        "2sm": "3px -2px 2px",
        sm: "5px -5px 5px #1e1e1e",
        md: "-10px 10px 10px",
      },

      spacing: {
        "4p": "4%",
        "5p": "5%",
        "7p": "7%",
        "13p": "13%",
        "15p": "15%",
        "25p": "25%",
        "80p": "80%",
        "90p": "90%",
        "95p": "95%",
        "98p": "98%",
        "166p": "166%",
        full: "100%",
        18: "75px",
        25: "100px",
        30: "125px",
        38: "150px",
        76: "300px",
        100: "400px",
        "50vh": "50vh",
        none: "none",
      },

      fontSize: {
        "2xl": "1.5rem",
        "5vmax": "5vmax",
        "8vmin": "8vmin",
      },

      rotate: {
        135: "135deg",
      },
    },
  },

  plugins: [],
};
