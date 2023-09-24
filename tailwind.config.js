/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        stc: 'repeat(22, 1fr)',
        skr: 'repeat(20, 1fr)'
      }
    }
  },
  plugins: []
}
