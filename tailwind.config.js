module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./firebaseComponents/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          light: "#040e27",
        },
      },
      spacing: {
        banner: "650px",
        nanner: "750px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
