import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'public',
  server: {
    headers : {
      'cache-control': 'public, max-age=7776000'
    }
  },
  plugins: [react(), cloudflare()],
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