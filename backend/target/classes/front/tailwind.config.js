/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'text': '1px 1px 2px #000000, -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000'
      },
      screens: {
        'sm': '640px', // Pantallas pequeñas
        'md': '768px', // Pantallas medianas
        'lg': '1024px', // Pantallas grandes
        'xl': '1280px', // Pantallas extra grandes
      },
    },
  },
  plugins: [],
}

