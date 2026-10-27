/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: '#3457F1',
          light: '#5B79F7',
          dark: '#2440C7',
          50: '#F0F3FE',
        },
        violet: {
          DEFAULT: '#8155E8',
          light: '#9E7BF0',
          dark: '#663ACF',
          50: '#F7F4FD',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          hover: '#FA5252',
          light: '#FFA3A3',
          50: '#FFF0F0',
        },
        lavender: {
          DEFAULT: '#F1EDFF',
          light: '#F8F6FF',
          dark: '#E0D6FF',
        },
        paleblue: {
          DEFAULT: '#EAF3FF',
          light: '#F4F9FF',
          dark: '#D4E7FF',
        },
        deepink: {
          DEFAULT: '#191A35',
          light: '#25274D',
          muted: '#3C3E6E',
          card: '#1F2042',
          dark: '#111224',
        },
        cleanwhite: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'Noto Sans Tamil', 'Noto Sans Devanagari', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'soft-glow': '0 10px 30px -10px rgba(52, 87, 241, 0.25)',
        'violet-glow': '0 10px 30px -10px rgba(129, 85, 232, 0.25)',
        'coral-glow': '0 10px 25px -5px rgba(255, 107, 107, 0.35)',
        'card': '0 4px 20px -2px rgba(25, 26, 53, 0.06)',
        'card-hover': '0 16px 36px -4px rgba(25, 26, 53, 0.12)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
