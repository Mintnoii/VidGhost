/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{vue,ts}'
  ],
  theme: {
    colors: {
      background: '#1e293b'
    },
    extend: {},
  },
  plugins: [],
}

