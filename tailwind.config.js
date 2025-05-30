/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        pink: {
          500: '#ff4fa2',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-in 0.3s forwards',
        'fade-in-delay-2': 'fadeIn 0.8s ease-in 0.6s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};