/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
       raleway: ["Raleway"]
      },
      screens: {
        tablets: "767px",
        mobile: "640px",
        desktop: "1400px"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* menyembunyikan scrollbar */
          '-ms-overflow-style': 'none', // untuk IE dan Edge
          'scrollbar-width': 'none', // untuk Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // untuk Chrome, Safari, dan Opera
          },
        },
      })
    },
  ],
}

