import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    proxy: {
      '/pollar-api': {
        target: 'https://sdk.api.pollar.xyz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pollar-api/, '/v2'),
      },
    },
  },
})