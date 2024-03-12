// vite.config.ts
import react from "file:///Users/choihunoh/sidepeek_frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///Users/choihunoh/sidepeek_frontend/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { defineConfig, splitVendorChunkPlugin } from "file:///Users/choihunoh/sidepeek_frontend/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///Users/choihunoh/sidepeek_frontend/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig(({ command }) => ({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  // server: {
  //   proxy: {
  //     "/serve": {
  //       target: "http://3.39.156.144:8080",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/serve/, ""),
  //     },z
  // },
  publicDir: command === "serve" ? "public" : false,
  server: {
    proxy: {
      "/api": {
        target: "http://3.39.156.144:8080",
        changeOrigin: true
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      plugins: [
        visualizer({
          open: false,
          gzipSize: true,
          brotliSize: true
        })
      ],
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hvaWh1bm9oL3NpZGVwZWVrX2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hvaWh1bm9oL3NpZGVwZWVrX2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaG9paHVub2gvc2lkZXBlZWtfZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgc3BsaXRWZW5kb3JDaHVua1BsdWdpbiB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCJcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQgfSkgPT4gKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHRzY29uZmlnUGF0aHMoKSwgc3BsaXRWZW5kb3JDaHVua1BsdWdpbigpXSxcbiAgLy8gc2VydmVyOiB7XG4gIC8vICAgcHJveHk6IHtcbiAgLy8gICAgIFwiL3NlcnZlXCI6IHtcbiAgLy8gICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8zLjM5LjE1Ni4xNDQ6ODA4MFwiLFxuICAvLyAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gIC8vICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9zZXJ2ZS8sIFwiXCIpLFxuICAvLyAgICAgfSx6XG4gIC8vIH0sXG4gIHB1YmxpY0RpcjogY29tbWFuZCA9PT0gXCJzZXJ2ZVwiID8gXCJwdWJsaWNcIiA6IGZhbHNlLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgXCIvYXBpXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8zLjM5LjE1Ni4xNDQ6ODA4MFwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxNjAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdmlzdWFsaXplcih7XG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczogKGlkKSA9PiB7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gaWRcbiAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXVxuICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpWzBdXG4gICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLE9BQU8sV0FBVztBQUMxUyxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGNBQWMsOEJBQThCO0FBQ3JELE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsUUFBUSxPQUFPO0FBQUEsRUFDNUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTNUQsV0FBVyxZQUFZLFVBQVUsV0FBVztBQUFBLEVBQzVDLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCx1QkFBdUI7QUFBQSxJQUN2QixlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixZQUFZO0FBQUEsUUFDZCxDQUFDO0FBQUEsTUFDSDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sY0FBYyxDQUFDLE9BQU87QUFDcEIsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPLEdBQ0osU0FBUyxFQUNULE1BQU0sZUFBZSxFQUFFLENBQUMsRUFDeEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUNaLFNBQVM7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
