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
    target: 'es2015', // Support older browsers while keeping bundle small
    esbuild: {
      drop: ['console', 'debugger'], // Remove console.logs and debuggers in production
      legalComments: 'none', // Remove license comments to reduce size
    },
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            if (id.includes('@emailjs')) {
              return 'emailjs-vendor';
            }
            // Other node_modules go into a shared vendor chunk
            return 'vendor';
          }
          // Separate all demo data files
          if (id.includes('/src/data/')) {
            return 'demo-data';
          }
          // Group all demo pages together
          if (id.includes('/src/pages/Ai') && !id.includes('AiInsights')) {
            const match = id.match(/\/pages\/(Ai\w+)\.jsx/);
            if (match) {
              return `demo-${match[1].toLowerCase()}`;
            }
          }
        },
        // Asset file naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,
    // Compression
    reportCompressedSize: true,
    // Optimize dependencies
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
