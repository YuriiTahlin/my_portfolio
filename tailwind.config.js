/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#001300",
        secondary: "#8880a0",
        tertiary: "#00302b",
        "black-100": "#001600",
        "white-100": "#d1d1d1",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/back.jpg')",
      },
      backgroundPosition: {
        'right': 'right',
      },
    },
  },
  plugins: [],
};
