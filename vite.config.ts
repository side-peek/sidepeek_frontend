import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ command }) => ({
  plugins: [react(), tsconfigPaths()],
  publicDir: command === "serve" ? "public" : false,
}))
