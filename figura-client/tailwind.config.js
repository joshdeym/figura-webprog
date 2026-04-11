/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(2, 6, 23)',
        surface: 'rgb(11, 18, 32)',
        heading: '#ffffff',
        accent: '#ff6a00',
      },
      backgroundColor: {
        primary: 'rgb(2, 6, 23)',
        surface: 'rgb(11, 18, 32)',
        'surface-dark': 'rgb(6, 12, 26)',
      },
      textColor: {
        primary: '#e5e7eb',
        heading: '#ffffff',
        accent: '#ff6a00',
      },
      borderColor: {
        accent: '#ff6a00',
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #ff6a00 0%, #ff4500 100%)',
      },
    },
  },
  plugins: [],
}
