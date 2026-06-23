/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', '"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-emerald': '0 0 16px rgba(52,211,153,0.35), 0 0 40px rgba(52,211,153,0.12)',
        'neon-cyan':    '0 0 16px rgba(34,211,238,0.35), 0 0 40px rgba(34,211,238,0.12)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      },
    },
  },
  plugins: [],
}
