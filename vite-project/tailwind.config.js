module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        product: ['"Product Sans"', 'sans-serif'],
        satoshi: ['"Satoshi"', 'sans-serif'],
        googlecode: ['"Google Sans Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};