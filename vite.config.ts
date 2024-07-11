import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        display: "swap",
        injectTo: "head-prepend",
        families: [
          {
            name: "Space Grotesk",
            styles: "wght@300..700",
            defer: true,
          },
        ],
      },
    }),
  ],
});
