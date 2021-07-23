import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/core": path.resolve(__dirname, "src/core"),
      "@/config": path.resolve(__dirname, "src/config"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/mock": path.resolve(__dirname, "src/mock"),
    },
  }
})
