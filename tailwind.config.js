/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#1E3D2F',
          light: '#2a5240',
          dark: '#162e22',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#e8c84a',
          dark: '#b8932a',
        },
        blue: {
          DEFAULT: '#2E86C1',
          dark: '#1f6fa0',
        },
        sand: {
          DEFAULT: '#F4E8D8',
          dark: '#e8d8c4',
        },
        textDark: '#1a2a20',
        textMid: '#3a5a40',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
