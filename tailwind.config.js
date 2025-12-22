/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: "#c0c0c0",
          text: "#000000",
          link: "#0000ee",
          visited: "#551a8b",
          active: "#ee0000",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
