module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave': "url('/images/wave-clear.svg')",
        'jumbo': "url('/images/blob-scene-haikei.png')",
        'earth': "url('/images/earth.jpg')"
      }),
      fontFamily: {
        'sourcecode': ['"Source Code Pro"', 'sans-serif']
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
