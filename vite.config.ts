import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],

  build: {
    target: "esnext",
    minify: "esbuild",

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          charts: ["recharts"],
          vendor: ["lodash", "date-fns"]
        }
      }
    },

    chunkSizeWarningLimit: 1000
  },

  server: {
    port: 5173,
    open: true
  }
})
