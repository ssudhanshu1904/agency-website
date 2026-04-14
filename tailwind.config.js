/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        border: 'rgb(var(--border-rgb) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Chakra Petch', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(139, 92, 246, 0.5)',
        'neon-strong': '0 0 18px rgba(139, 92, 246, 0.62), 0 0 34px rgba(59, 130, 246, 0.35)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '15%': { opacity: '0.86' },
          '45%': { opacity: '0.93' },
          '75%': { opacity: '0.9' },
        },
      },
      animation: {
        flicker: 'flicker 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
