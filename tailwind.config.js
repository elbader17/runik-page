/** @type {import('tailwindcss').Config} */
module.exports = {
  // Habilitamos el modo oscuro
  darkMode: 'class',
  
  // Aquí le decimos a Tailwind dónde buscar clases
  // (Incluí todos los HTML que vi en tu proyecto)
  content: [
    "./index.html",
    "./blog.html",
    "./auto.html",
    "./data.html",
    "./pages.html",
    "./e-com.html" 
  ],
  
  // Tu configuración de tema personalizada
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D4AF37',
        'dark-bg': '#121212',
        'light-bg': '#F9F9F9',
        'dark-card': '#1a1a1a',
      },
      // Definimos las familias de fuentes
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'mono-display': ['Major Mono Display', 'monospace'],
      }
    },
  },
  plugins: [],
}
