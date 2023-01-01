/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Natural: ['Natural', 'serif'],
      poppins: ['Poppins', 'sans-serif']
    },
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
        'home-2':"url('/images/background/home2.png')",
        'about-1':"url('/images/background/about1.png')",
      }
    },
  },
  plugins: [],
}