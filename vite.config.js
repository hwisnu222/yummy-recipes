import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // add followinng code for setup RTL test to vite
  test: {
    environment: ["jsdom"],
    setupFiles: ["./tests/setup.js"],
    testMatch: ["./tests/**/*.test.js"],
    globals: true,
  },
});
