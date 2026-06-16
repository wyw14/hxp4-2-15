import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42028,
    proxy: {
      '/api': {
        target: 'http://localhost:42029',
        changeOrigin: true,
      },
    },
  },
});
