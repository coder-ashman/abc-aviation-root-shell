import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      input: 'src/main.single-spa.js',
      output: {
        format: 'es',
        entryFileNames: 'main.single-spa.js'
      }
    }
  },
  preview: {
    cors: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
});

