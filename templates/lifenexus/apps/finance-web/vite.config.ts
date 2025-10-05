import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'lifenexus-finance',
      filename: 'remoteEntry.js',
      exposes: {
        './root': './src/root-lifecycle.tsx'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
      }
    })
  ],
  server: { cors: true, headers: { 'Access-Control-Allow-Origin': '*' } },
  preview: { cors: true, headers: { 'Access-Control-Allow-Origin': '*' } },
});

