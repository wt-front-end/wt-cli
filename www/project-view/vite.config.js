import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({})],
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置路径
      "~": resolve(__dirname, "./"),
      // 设置别名
      "@": resolve(__dirname, "./src")
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
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
