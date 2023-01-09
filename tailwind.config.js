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
        'pattern-1':"url('/images/background/pattern-top-footer.png')",
        'footer':"url('/images/assets/footer.png')",
        'home-card-baha':"url('/images/assets/desa-baha-1.png')",
        'wisata-1':"url('/images/background/bg-wisata-1.png')",
        'umkm-1':"url('/images/background/umkm1.png')",
        'sobangan-1':"url('/images/background/sobangan.png')",
        'komoditas-1':"url('/images/background/komoditas-1.png')"
      }
    },
  },
  plugins: [],
}