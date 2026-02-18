import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Безопасная передача API-ключа из окружения Vercel в клиентский код
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  build: {
    // Повышаем порог предупреждения, так как Recharts и GenAI весят много
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        // Разделяем тяжелые библиотеки на отдельные файлы (vendor chunk) для кэширования браузером
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'viz-vendor': ['recharts'],
          'genai-vendor': ['@google/genai'],
        },
      },
    },
  },
});