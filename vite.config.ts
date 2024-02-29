import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ command }) => ({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  publicDir: command === "serve" ? "public" : false,
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
}))
