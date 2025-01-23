import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '1502-2409-40e1-6-3e66-55f5-f9c9-3323-f466.ngrok-free.app',
      'localhost',
    ],
  },
})
