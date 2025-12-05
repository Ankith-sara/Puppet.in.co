/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bodoni: ['Bodoni Moda', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        hind: ['Hind Mysuru', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        // Dark Vice City Theme Colors
        primary: "#000000",   
        secondary: "#1a0a2e", 
        text: "#e5e5e5",
        background: "#0a0015", 
        
        // Accent colors
        neon: {
          pink: "#db2777",         
          cyan: "#0891b2",        
          purple: "#9333ea"
        }
      },
    },
  },
  plugins: [],
}