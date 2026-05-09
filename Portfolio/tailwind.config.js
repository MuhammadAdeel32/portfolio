/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",    // Emerald 500
        secondary: "#111827",  // Gray 900
        accent: "#3b82f6",     // Blue 500
        sidebar: {
          DEFAULT: "#0f172a",  // slate-900
          dark: "#0f172a",
          light: "#f8fafc",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
