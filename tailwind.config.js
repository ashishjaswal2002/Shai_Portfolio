/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Adding Our Custom Anything
    extend: {
      fontFamily:{
        poppins:'Poppins',
       Stylish: ['Rubik Vinyl']
      },

    },
  },
  plugins: [],
}