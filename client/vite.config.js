import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxying /api avoids CORS headaches and lets the client use relative URLs.
    proxy: { '/api': 'http://localhost:4000' },
  },
});
