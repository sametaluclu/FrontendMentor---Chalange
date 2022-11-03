/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-gray" : "hsl(212, 45%, 89%)",
        "b-white" : "hsl(0, 0%, 100%)",
        "white" : "hsl(0, 0%, 100%)",
        "text-blue" : "hsl(220, 15%, 55%)",
        "min-gray" : "hsl(218, 44%, 22%)",
        "vry-dark-blue" : "hsl(217, 54%, 11%)",
        "card-blue" : "hsl(216, 50%, 16%)",
        "line-blue" : "hsl(215, 32%, 27%)",
        "soft-blue" : "hsl(215, 51%, 70%)",
        "cyan-eth" : "hsl(178, 100%, 50%)",
        "pale-blue" : "hsl(225, 100%, 94%)",
        "bright-blue" : "hsl(245, 75%, 52%)",
        "pale-blue" : "hsl(225, 100%, 98%)",
        "dst-blue" : "hsl(224, 23%, 55%)",
        "dark-blue" : "hsl(223, 47%, 23%)",
        "bright-orange" : "hsl(31, 77%, 52%)",
        "drk-cyan" : "hsl(184, 100%, 22%)",
        "vry-dark-cyan" : "hsl(179, 100%, 13%)",
        "transp-white" : "hsla(0, 0%, 100% ,0.75)",
        "vry-light-gray" : "hsl(0, 0%, 95%)",
        "vry-dark-main-blue" : "hsl(233, 47%, 7%)",
        "desaturated-blue" : "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "transp-white-2" : "hsla(0, 0%, 100%, 0.6)",
      },
      backgroundImage: {
        "order-image" : "url(/src/Order-Summary/img/pattern-background-desktop.svg)",
      }
    },
    
  },
  plugins: [],
}