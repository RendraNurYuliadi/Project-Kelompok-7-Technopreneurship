import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/DigitalSolution/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  },
  server: {
    port: 5173
  }
})
