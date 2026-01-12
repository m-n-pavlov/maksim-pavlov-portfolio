import react from '@vitejs/plugin-react'; // основной плагин для поддержки React (JSX, Fast Refresh и т.д.)
import { fileURLToPath, URL } from 'node:url'; // инструменты Node.js для работы с путями через URL
import { defineConfig } from 'vite'; // функция для удобного написания конфига с подсказками TypeScript

/* Экспорт конфигурации Vite */
export default defineConfig({
  plugins: [react()], // подключаем плагин React
  resolve: {
    alias: {
      // Превращаем относительный путь './src' в абсолютный путь файловой системы
      // import.meta.url — это ссылка на текущий файл (vite.config.ts)
      '@': fileURLToPath(new URL('./src', import.meta.url)), // алиас связывает символ @ с папкой src
    },
  },
});
