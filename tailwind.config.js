/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#30363db3',
        dark: '#21262d',
        muted: '#848d97'
      },
      fontFamily: {
        millik: ["'Millik'", 'sans-serif'],
        'moderat-medium': ["'Moderat-Medium'", 'sans-serif'],
        'moderat-bold': ["'Moderat-Bold'", 'sans-serif']
      }
    }
  },
  plugins: []
}
