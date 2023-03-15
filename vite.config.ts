import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
