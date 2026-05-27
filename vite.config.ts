import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto ya permite que Docker exponga la red
    watch: {
      usePolling: true, // ¡ESTA ES LA LÍNEA MÁGICA! Fuerza a Vite a revisar los cambios
    }
  }
})