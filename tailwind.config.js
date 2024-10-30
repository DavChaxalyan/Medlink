module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      filter: {
        'custom-filter': 'brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(1202%) hue-rotate(179deg) brightness(97%) contrast(101%)',
        'black-filter': ' brightness(0) saturate(100%) invert(13%) sepia(44%) saturate(305%) hue-rotate(168deg) brightness(101%) contrast(98%)',

      },
      colors: {
        customGray: '#1F2933',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(180, 192, 208, 0) 0%, #B4C0D0 77.83%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  
  ],
}
