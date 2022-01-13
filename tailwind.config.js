module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
      deca: "'Lexend Deca', sans-serif",
    },
    extend: {
      colors: {
        primary: {
        10: 'hsl(233, 47%, 7%)',
        20: 'hsl(191, 100%, 50%)',
        30: 'hsl(244, 38%, 16%)',
        40: 'hsl(277, 64%, 61%)',
        50: 'hsl(0, 0%, 100%)',
        60: 'hsla(0, 0%, 100%, 0.75)',
        70: 'hsla(0, 0%, 100%, 0.6)',
        },
      },
    },
  },
  plugins: [],
}
