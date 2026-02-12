import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/AnimalHouse/', // GitHub Pages용 base path
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    open: true // 자동으로 브라우저 열기
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 번들 크기 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three']
        }
      }
    }
  }
})
