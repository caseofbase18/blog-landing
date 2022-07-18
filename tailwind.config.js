/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Sansita', 'sans-serif'],
        'body': ['Lato', 'sans-serif']
      },
      colors: {
        'pri': '#081F4D',
        'sec': '#0083FF',
        'gen': '#384D71',
        'our-bg': '#D9E6FF'
      }
    },
  },
  plugins: [],
}
