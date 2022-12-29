/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        's-orange': '#E16A3D',
        't-orange': '#FFA45D',
        't-blue':'#016A6D',
        'n-blue':'#043E52'
      },
      backgroundImage: {
        'home-1':"url('/images/background/home1.png')",
      }
    },
  },
  plugins: [],
}