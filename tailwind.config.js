/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1320px"
      },
      colors:{
          'BlackColor': '#00000',
          'GreenColor': '#B9FF66',
          'Gray': '#D9D9D9',
      
      },
      fontFamily:{
          'pops': ['Poppins', 'serif'],
          'italic': ['Noto Sans Old Italic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
