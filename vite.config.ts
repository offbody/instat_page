import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Безопасная передача API-ключа из окружения в клиентский код
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  build: {
    // Повышаем порог предупреждения о размере, так как библиотеки визуализации тяжелые
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Упрощенная стратегия разделения кода для повышения стабильности
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});