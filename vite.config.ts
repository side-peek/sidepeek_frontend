import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import viteCompression from "vite-plugin-compression"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://3.39.156.144:8080",
        changeOrigin: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      plugins: [
        visualizer({
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
      ],
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString()
          }
        },
      },
    },
  },
}))
