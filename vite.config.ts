import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "canvas",
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "#": path.join(__dirname, "src/types"),
    },
  },
});
