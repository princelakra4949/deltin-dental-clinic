/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          50:  '#E8EBF3',
          100: '#C5CCE0',
          200: '#9DAAC9',
          300: '#7488B2',
          400: '#4C659A',
          500: '#2A4380',
          600: '#1E3166',
          700: '#142249',
          800: '#0D1B3E',
          900: '#080F24',
        },
        gold: {
          DEFAULT: '#F5C518',
          50:  '#FFFBE8',
          100: '#FEF4C0',
          200: '#FDEC93',
          300: '#FCE261',
          400: '#FAD72E',
          500: '#F5C518',
          600: '#D4A800',
          700: '#A28100',
          800: '#705900',
          900: '#3E3100',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
