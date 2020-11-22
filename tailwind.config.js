// const colors = require('colors');
module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  // purge: false,
  theme: {
    extend: {
      colors: {
        blueGray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      cursor: ['responsive', 'hover', 'disabled'],
    },
  },
  plugins: [],
};
