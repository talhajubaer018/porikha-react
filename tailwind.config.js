// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: {
          300: '#A2DCFF',
          500: '#5AADFF',
          600: '#80D3FF',
          800: '#427EB9',
          900: '#0067A6',
          1000: '#1E3F5A',
          1200: '#102B4D',
        },
        customGreen: {
          500: '#159B10',
          800: '#149A0F',
        },
        customRed: {
          800: '#FF1D1D'
        },
        brands: {
          google: '#FF621C',
          facebook: '#345AA5',
          twitter: '#00A7E6'
        },
        customGray: {
          500: '#474D50'
        }
      },
      outline: {
        customBlue: '3px solid #427EB9'
      },
      gridTemplateColumns: {
        '1/2': '1fr 2fr'
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
