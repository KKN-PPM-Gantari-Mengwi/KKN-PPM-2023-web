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
        's-orange': '#E06A3C',
        't-orange': '#FFA45D',
        'w-yellow': '#FFF4CF',
        't-blue':'#016A6D',
        'n-blue':'#043E52',
        'l-pink':'#FBE1DB',
        'h-pink': '#CB5260',
      },
      backgroundImage: {
        'home-1':"url('/images/background/home-1.jpg')",
        'home-2':"url('/images/background/home2.png')",
        'about-1':"url('/images/background/about1.png')",
        'pattern-1':"url('/images/background/pattern-top-footer.png')",
        'pattern-2':"url('/images/background/pattern-wisata-home-card.png')",
        'footer':"url('/images/assets/footer.png')",
        'home-card-baha':"url('/images/assets/desa-baha-1.png')",
        'wisata-1':"url('/images/background/bg-wisata-1-fix.png')",
        'umkm-1':"url('/images/background/umkm1.png')",
        'sobangan-1':"url('/images/background/desa-sobangan-2.jpg')",
        'komoditas-1':"url('/images/background/komoditas-1.png')",
        'wisata-card-baha':"url('/images/background/wisata-card-baha.png')",
        'wisata-card-sobangan':"url('/images/background/wisata-card-sobangan.png')",
        'pemetaan-pertanian':"url('/images/background/pemetaan-pertanian.svg')",
        'pemetaan-peternakan':"url('/images/background/pemetaan-peternakan.svg')",
        'mitigasi-bencana':"url('/images/background/mitigasi-bencana.png')",
        'taman-manik-segara' : "url('/images/wisata/taman-manik-segara/bg-revamp.jpg')",
        'warung-umasana' : "url('/images/wisata/warung-umasana/bg-revamp.jpg')",
      }
    },
  },
  plugins: [],
}