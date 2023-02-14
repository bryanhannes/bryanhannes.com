/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        orange: "#F04D26",
        brown: "#27221D",
      },
    },
  },
  plugins: [],
};
