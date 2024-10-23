module.exports = {
  content: [
    './index.html',              // Убедись, что путь к index.html указан правильно
    './src/**/*.{vue,js,ts,jsx,tsx}', // Убедись, что указаны все файлы, содержащие Tailwind классы
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}