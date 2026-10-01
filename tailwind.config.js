/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '1.5rem' },
      screens: { sm: '540px', md: '720px', lg: '960px', xl: '1200px', '2xl': '1200px' },
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#086AD7',
          dark: '#0655ac',
          light: '#3b8ce4',
          soft: '#eaf2fd',
        },
        heading: '#211e3b',
        body: '#696969',
        night: '#0d0b21',
        mist: '#f5f8fd',
      },
      fontFamily: {
        display: ['Syne', 'Segoe UI', 'sans-serif'],
        sans: ['"Istok Web"', 'Roboto', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px rgba(33, 30, 59, 0.08)',
        hover: '0 18px 50px rgba(8, 106, 215, 0.18)',
        nav: '0 8px 30px rgba(33, 30, 59, 0.08)',
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        floatX: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(18px)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        pulseRing: { '0%': { transform: 'scale(.85)', opacity: '1' }, '100%': { transform: 'scale(1.6)', opacity: '0' } },
        zoomBg: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.14)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        floatY: 'floatY 4s ease-in-out infinite',
        floatX: 'floatX 5s ease-in-out infinite',
        spinSlow: 'spinSlow 18s linear infinite',
        pulseRing: 'pulseRing 2s cubic-bezier(.4,0,.6,1) infinite',
        zoomBg: 'zoomBg 12s ease-out forwards',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
}
