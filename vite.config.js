import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Forces Vite to use polling for file changes (essential for WSL/Docker if HMR breaks)
    watch: {
      usePolling: true,
    },
    // Explicitly enables/configures Hot Module Replacement
    hmr: true, 
  },
})