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
        mobile: "639px",
      }
    },
  },
  plugins: [],
}

