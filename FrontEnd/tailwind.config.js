/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#6DE495",
        "secondary-violet": "#005D83",
        "tertiary-gray": "#DADADA",
        "accent-yellow": "#FFFA87",
        wrong: "#E93B3B",
        warning: "#EFC900",
        success: "#44D94A",
        "gray-bg": "#F5F5F5",
        "gray-dark-bg": "#EDEDED",
        "dark-text": "#39353F",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      pulse:{
        '0%, 100%' :{
          opacity:1,
        },
        '50%':{
          opacity:.5
        }
      },
      ping:{
        '75%, 100%' :{
          transform:'scale(2)',
          opacity:0,
        },
        
      }
    },
  },
  plugins: [],
};
