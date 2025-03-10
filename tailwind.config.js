/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#FFFFFF',
        'background-secondary': '#e6b374', // Gold for warm backgrounds
        'background-alternative': '#879e3c', // Green for CTAs and key elements
        'text-primary': '#64503f', // Brown for body text
        'text-alternative': '#FFFFFF',
        'border-primary': '#879e3c', // Green for borders
        'accent-1': '#d06129', // Orange for highlights
        'accent-2': '#e6b374', // Gold for accents
        'accent-3': '#879e3c', // Green for primary actions
        'neutral-black': '#64503f', // Brown for dark elements
        'neutral-lighter': '#f5f5f5', // Light gray maintained for contrast
      },
      fontSize: {
        'md': '1rem',          // 16px
        'lg': '1.125rem',      // 18px
        'xl': '1.25rem',       // 20px
        '2xl': '1.5rem',       // 24px
        '3xl': '1.875rem',     // 30px
        '4xl': '2.25rem',      // 36px
        '5xl': '2.5rem',       // 40px
        '6xl': '3rem',         // 48px
        '7xl': '3.5rem',       // 56px
        '8xl': '4rem',         // 64px
        '9xl': '4.5rem',       // 72px
        '10xl': '5rem',        // 80px
      },
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}