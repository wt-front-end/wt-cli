import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({})],
  server: {
    port: 5282,
    host: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:9159", // 本地node服务
        changeOrigin: true,
        // rewrite: p => p.replace(/^\/api/, "")
      }
    }
  }
})
