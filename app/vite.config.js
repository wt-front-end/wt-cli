import { defineConfig, loadEnv } from 'vite'
import { resolve } from "path";
import createVitePlugins from "./vite";
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: createVitePlugins(env),
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
        },
        "/socket.io": {
          target: "http://localhost:9159/socket.io", // 本地node服务
          ws:true,
          changeOrigin: true,
        },
      }
    }
  }
})
