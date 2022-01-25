import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { Z_PARTIAL_FLUSH } from 'zlib'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: 'components', replacement: resolve(__dirname, 'src/components') },
      { find: 'apis', replacement: resolve(__dirname, 'src/apis') },
      { find: 'views', replacement: resolve(__dirname, 'src/views') },
      { find: 'utils', replacement: resolve(__dirname, 'src/utils') },
      { find: 'routes', replacement: resolve(__dirname, 'src/routes') },
      { find: 'styles', replacement: resolve(__dirname, 'src/styles') },
    ],

  },

  server: {
    host: '0.0.0.0'
  },
  plugins: [vue(), viteMockServe({ supportTs: true })]
})
