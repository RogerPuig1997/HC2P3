/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'masterbrand': '#73edff',
        'corporate': '#000078',
        'primaty': '#737373',
        'tmbg': '#aff4ff'
      },
      backgroundImage: {
        'tennis-bg': "url('../images/tennis_bg.png')",
      },
    },
  },
  plugins: [],
}

