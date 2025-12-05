import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/mailer.php': {
        target: 'https://r9a.in',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
