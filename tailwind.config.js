/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-background': '#0070e4',
      'white': '#ffffff', 
      'dark-orange': '#BA5358'
    },
    extend: {},
  },
  plugins: [],
}

