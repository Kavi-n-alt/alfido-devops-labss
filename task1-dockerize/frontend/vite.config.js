import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Root is `public` so static index is there; built assets go to ../dist
export default defineConfig({
  root: resolve(__dirname, 'public'),
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'public', 'index.html')
    }
  },
  server: {
    port: 5173
  }
})
