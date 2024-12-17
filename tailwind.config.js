/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',
        'celeste': '#75a2b5',
        'azul':'#014961',
        'dorado':'#968843',
        'cartel':'#10181b'
      },
    },
  },
  plugins: [],
}
