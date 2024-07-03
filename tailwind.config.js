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
      },
      backgroundImage:{
        'banner-gradient': "linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)"
      }
    },
  },
  plugins: [],
}

