import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
  build: {
    // Production optimizations
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'], // Remove console.logs and debuggers in production
    },
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Separate demo data
          'demo-data': [
            './src/data/insightsDemo.jsx',
          ],
        },
        // Asset file naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,
  },
});
