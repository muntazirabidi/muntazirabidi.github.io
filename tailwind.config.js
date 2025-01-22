const { theme } = require('./src/styles/theme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fonts,
      animation: theme.animation,
      borderRadius: theme.borderRadius,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};