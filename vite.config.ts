import { defineConfig } from 'vite'
// import { reactRouter } from '@react-router/dev/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'public',
  server: {
    headers : {
      'cache-control': 'public, max-age=31536000'
    }
  },
  plugins: [
    react()
  ],
  css : {
    preprocessorOptions: {
      scss : {
        additionalData: `@use "@/_variables.scss" as *;`
      },
    },
  },
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
    },
  },
})
