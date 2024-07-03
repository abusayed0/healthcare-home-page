/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#020043',
        'text-secondary': '#4D4C7B',
      }
    },
  },
  plugins: [],
}

