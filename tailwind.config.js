/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-main': '#0ea5e9',
        'custom-secondary': '#AFB7B9'
      },
      container: {
        screens: {
          lg: '1350px',
          xl: '1640px'
        }
      }
    }
  },
  plugins: []
}
