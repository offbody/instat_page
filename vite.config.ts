import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Безопасная замена для API ключа
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  build: {
    // Увеличиваем лимит предупреждения о размере чанка, так как Recharts и GenAI довольно тяжелые
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'recharts', 'lucide-react'],
        },
      },
    },
  },
});