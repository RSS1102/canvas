import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_BASEURL,
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
        "#": path.join(__dirname, "src/types"),
      },
    },
  };
});
