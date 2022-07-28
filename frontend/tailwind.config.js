/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(250,250,250,0.17)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
