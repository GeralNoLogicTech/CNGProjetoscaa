const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Inter', // <-- Roboto is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: fontFamily,
    extend: {},
    },
  variants: {},
  plugins: [],
};
