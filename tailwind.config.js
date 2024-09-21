/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        '15': '15px',},
        width: {
          '400': '400px',
        },
        height: {
          '180': '180px',
        },
        margin: {
          '100': '100px',
        },
    },
    colors:{
      primarycolor: '#2D66EE',
      'custom-gray': '#667085',
      lightGrey:"#c5c9d1"
    },
  },
  plugins: [],
}

