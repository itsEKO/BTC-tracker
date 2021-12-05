const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      green: '#4abd68',
      black: '#0d0d0d',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
