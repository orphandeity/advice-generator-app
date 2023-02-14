/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0px 0px 30px 8px rgba(82,255,169,0.6)'
      },
      colors: {
        '_light-cyan': '#cee3e9',
        '_neon-green': '#52ffa8',
        '_grayish-blue': '#4e5d73',
        '_dark-grayish-blue': '#323a49',
        '_dark-blue': '#1f2632'
      },
      fontFamily: {
        'sans': ['Manrope', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}
