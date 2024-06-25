import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), builderDevTools()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
