/** @type {import('tailwindcss').Config} */
export default{
    darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fire: {
          orange: '#FF5722',
          violet: '#7E57C2',
          dark: '#0a0a0a',
          surface: '#121212',
          accent: '#FFAB40',
          gold: '#FFD700'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        brand: ['Bebas Neue', 'cursive'],
        garamond: ['EB Garamond', 'serif'],
        serif: ['EB Garamond', 'serif'],
      }
    }
  },
  plugins: [],
}