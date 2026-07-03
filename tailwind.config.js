/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0f1d',      // Deep navy black
          navy: '#131c35',      // Activewear navy
          coral: '#ff5a3c',     // Vibrant athletic orange/red (ON7 signature color)
          grey: '#64748b',      // Cool steel grey
          light: '#f8fafc',     // Clean background white
          accent: '#3b82f6'     // Electric blue accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
