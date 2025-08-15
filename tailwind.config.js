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
  'hover:bg-sky-700',
  'hover:bg-cyan-700',
  'hover:bg-indigo-700',
  'hover:bg-rose-700',
  'hover:bg-orange-700',
  'hover:bg-amber-700',
  'hover:bg-slate-700',
  'hover:bg-stone-700',
  'hover:bg-zinc-700',
  'hover:bg-blue-700',
  'hover:bg-violet-700',
  'hover:border-violet-700'
],
  plugins: [],
}
