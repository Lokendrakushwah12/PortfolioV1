/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xm: { max: "480px" },
      md: { min: "768px" },

    },
    extend: {},
  },
  plugins: [],
}