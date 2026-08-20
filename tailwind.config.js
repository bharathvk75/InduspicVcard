/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          terracotta: '#B5452A',
          olive: '#4A5A2B',
          cream: '#F5E6C8',
          charcoal: '#1C1C1E',
          'warm-gray': '#8E8E93',
          'light-gray': '#F2F2F7',
          'card-bg': '#FFFFFF',
          'card-border': 'rgba(0, 0, 0, 0.06)',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 2px 8px rgba(0, 0, 0, 0.06), 0 16px 48px rgba(0, 0, 0, 0.12)',
        'btn': '0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.06)',
        'btn-hover': '0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.08)',
        'logo': '0 2px 12px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
