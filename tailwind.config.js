/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple': '#864CFF',
        'grey': 'hsl(0, 1%, 44%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      letterSpacing: {
        widest: '0.2em',
      }
    },
  },
  plugins: [],
}

