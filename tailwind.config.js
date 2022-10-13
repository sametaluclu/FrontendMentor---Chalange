/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "light-gray" : "hsl(212, 45%, 89%)",
        "b-white" : "hsl(0, 0%, 100%)",
        "text-blue" : "hsl(220, 15%, 55%)",
        "min-gray" : "hsl(218, 44%, 22%)",
        "vry-dark-blue" : "hsl(217, 54%, 11%)",
        "card-blue" : "hsl(216, 50%, 16%)",
        "line-blue" : "hsl(215, 32%, 27%)",
      }
    },
  },
  plugins: [],
}