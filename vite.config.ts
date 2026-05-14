import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          three: [
            "three",
            "@react-three/drei",
            "@react-three/fiber",
            "@react-three/postprocessing",
          ],
          animation: ["lottie-react"],
          icons: ["react-icons"],
        },
      },
    },
  },
});
