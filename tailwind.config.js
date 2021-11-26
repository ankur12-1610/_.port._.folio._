const plugin = require('tailwindcss/plugin')

module.exports = {

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange': '#D35269',
        'lcolor': '#0a66c2'
      },
        backdropBlur: {
          sm: '6px',
        },
        fontFamily: {
          Dosis: ['Dosis', 'sans-serif'],
          RobotoC: ['Roboto Condensed', 'sans-serif'],
          Josefin: ['Josefin Sans', 'sans-serif'],
          Fira: ['Fira Code', 'monospace'],
        },
        fontSize: {
          '1xl': '1.5rem',
        },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    },
  },

  plugins: [
  
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
}
