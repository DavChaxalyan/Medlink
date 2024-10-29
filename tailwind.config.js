module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      filter: {
        'custom-filter': 'brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(1202%) hue-rotate(179deg) brightness(97%) contrast(101%)',
      },
      colors: {
        customGray: '#1F2933',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
