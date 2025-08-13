/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        debug: "#ff00ff",
      },
    },
  },
  safelist: [
    'hover:bg-blue-700',
    'hover:bg-red-500',
  ],
  plugins: [],
}
