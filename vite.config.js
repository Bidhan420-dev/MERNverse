import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: "./",   // ✅ THIS IS IMPORTANT FOR DEPLOYMENT

  plugins: [
    react(),
    tailwindcss()
  ],
})