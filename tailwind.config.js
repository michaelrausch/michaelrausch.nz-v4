module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave': "url('/images/wave-clear.svg')"
      }),
      colors: {
        yellow: {
          DEFAULT: '#00dd88',
          light: '#00f597',
          dark: '#00dd88',
          ultralight: '#b8ffe4',
          megalight: '#d6ffef',
          regular: '#00dd88'
        },

        barberco: {
          DEFAULT: '#353535'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
