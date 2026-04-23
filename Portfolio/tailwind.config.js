/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981", // Emerald 500 for a fresh, modern developer look
        secondary: "#111827", // Gray 900 for modern dark mode base
        accent: "#3b82f6", // Blue 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
