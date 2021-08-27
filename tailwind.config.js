module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: theme => ({
        'wave': "url('/images/wave-clear.svg')",
        'jumbo': "url('https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        'earth': "url('/images/earth.jpg')",
        'au': "url('/images/aunz.png')"
      }),
      fontFamily: {
        'sourcecode': ['"Source Code Pro"', 'sans-serif'],
        'futura-pt': ['"futura-pt"', 'sans-serif'],
        'futura-pt-bold': ['"futura-pt-bold"', 'sans-serif'],
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.gray.100") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100") },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            }
          }
        }
      },
      colors: {
        yellow: {
          DEFAULT: '#00dd88',
          light: '#00f597',
          dark: '#00dd88',
          ultralight: '#b8ffe4',
          megalight: '#d6ffef',
          regular: '#00dd88'
        },

        gray: {
          DEFAULT: '#0D0D0D',
          '700': '#22262a',
          '800': '#121416',
          '900': '#0D0D0D'
        },

        green: {
          "50": "#113ff107",
          "100": "#f0fff9",
          "200": "#adffe0",
          "300": "#66ffc4",
          "400": "#24ffab",
          "500": "#00db87",
          "600": "#00b36e",
          "700": "#008a55",
          "800": "#005c39",
          "900": "#00331f"
        },

        barberco: {
          DEFAULT: '#353535'
        }
      },
      boxShadow: {
        'offset-black': '5px 5px black',
        'offset-black-lg': '8px 8px black',
        'offset-green': '3px 3px #00DB87',
        'offset-green-lg': '5px 5px #00DB87'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

  ],
}
