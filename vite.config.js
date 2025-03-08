import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '127.0.0.1', '51474b37-1569-4031-8c46-f0c1f2706e87-00-2d43melz4klti.pike.repl.co']
  }
})
