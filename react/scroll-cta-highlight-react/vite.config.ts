import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // enables Jest-style globals like expect()
    environment: "jsdom", // browser-like environment
    setupFiles: "./src/setupTests.ts",
  },
});
