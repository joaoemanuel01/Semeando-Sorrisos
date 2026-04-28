/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          50:  '#f0fbff',
          100: '#e0f5fe',
          200: '#b9ecfd',
          300: '#7cdefa',
          400: '#38cef5',
          500: '#0eb8e2',
          600: '#0293c0',
          700: '#03759b',
          800: '#08607f',
          900: '#0c4f69',
        },
        navy: {
          700: '#0f3d5c',
          800: '#082d44',
          900: '#041e30',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

