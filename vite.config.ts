import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),AutoImport({
      dts: './src/typings/auto-imports.d.ts',
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
    }),],
    resolve: {
      alias: {
        // 把 @ 指向到 src 目录去
        '@': resolve(__dirname, './src')
      }
    },
      server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
})
