/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          navy: '#0B1C2D',
          blue: '#1F3A5F',
          accent: '#3DA9FC',
          slate: '#6B7280',
          light: '#F8FAFC',
          white: '#FFFFFF',
        }
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        '2xl': ['24px', { lineHeight: '1.25' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
