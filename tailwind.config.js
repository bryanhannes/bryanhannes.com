/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'beige': {
          100: '#E7E2D9',
          200: '#E5DFD4',
        },
        'orange': '#d4340f',
        'brown': '#27221D'
      }
    },

  },
  plugins: [],
};
