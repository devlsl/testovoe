import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      data: '/src/data',
      locale: '/src/data/locale',
      store: '/src/store',
      slices: '/src/store/slices',
      assets: '/src/assets',
      utils: '/src/utils'
    }
  }
})
