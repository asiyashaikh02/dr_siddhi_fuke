import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dr_siddhi_fuke/', // ✅ correct path for GitHub Pages
})
