/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        millik: ["'Millik'", 'sans-serif'],
        'moderat-medium': ["'Moderat-Medium'", 'sans-serif'],
        'moderat-bold': ["'Moderat-Bold'", 'sans-serif']
      }
    }
  },
  plugins: []
}
