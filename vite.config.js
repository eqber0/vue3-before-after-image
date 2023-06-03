import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue3-before-after-image",
      fileName: (format) => `vue3-before-after-image.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "before-after-compare",
    },
  },
  plugins: [vue()],
})
