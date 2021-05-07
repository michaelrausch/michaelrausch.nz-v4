module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave': "url('/images/wave-clear.svg')"
      }),
      colors: {
        dyellow: {
          DEFAULT: '#FFE410',
          light: '#ffed5d',
          dark: '#f6da00',
          ultralight: '#fff9c4',
          ultradark: '#2b2600',
          megalight: '#fffcde',
          regular: '#FCE951'
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
  plugins: [],
}
