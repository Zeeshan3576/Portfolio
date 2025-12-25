import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const lottieStubPath = fileURLToPath(new URL("./src/stubs/lottie.js", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "three-stdlib/libs/lottie.js", replacement: lottieStubPath },
      { find: "../libs/lottie.js", replacement: lottieStubPath },
    ],
  },
  optimizeDeps: {
    exclude: ["three-stdlib/libs/lottie.js"],
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/three/") ||
            id.endsWith("node_modules/three")
          ) {
            return "three-core";
          }
          if (id.includes("@react-three/fiber")) {
            return "r3f";
          }
          if (id.includes("@react-three/drei") || id.includes("three-stdlib")) {
            return "drei";
          }
          if (id.includes("@react-three/postprocessing") || id.includes("postprocessing")) {
            return "postprocessing";
          }
          if (id.includes("node_modules/gsap")) {
            return "gsap";
          }
        },
      },
    },
  },
});
