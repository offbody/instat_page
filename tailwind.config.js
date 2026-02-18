/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030303',
        surface: '#0A0A0A',
        primary: '#0471FF',
        brand: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0471FF',
          600: '#005AC2',
          700: '#004391',
          800: '#002C61',
          900: '#081221',
          950: '#030303',
          accent: '#06b6d4',
        },
        text: {
          main: '#FFFFFF',
          muted: 'rgba(255, 255, 255, 0.8)',
        }
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
      },
      animation: {
        'reveal-up': 'revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-down': 'revealDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.5s ease forwards',
        'scale-in': 'scaleIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'zoom-out': 'zoomOut 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    }
  },
  plugins: [],
}