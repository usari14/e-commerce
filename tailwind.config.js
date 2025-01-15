/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblack: "#333e48",
        lightyellow: "#FED700",
        darkyellow: "#e0be00"
      }
    },
  },
  plugins: [],
}