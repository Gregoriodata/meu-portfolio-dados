/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        border: "rgba(255,255,255,0.1)",
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
      },
    },
  },
  plugins: [],
}