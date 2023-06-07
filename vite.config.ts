import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: './src/typings/auto-imports.d.ts',
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
      ],
      resolvers: [
        // VueHooksPlusResolver(),
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
    }),
    Components({
      dts: './src/typings/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['src/components/'],
      resolvers: [
        // 自动注册图标组件
        // 自动导入 Naive Ui 组件
        NaiveUiResolver(),
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'svg-icon-[dir]/[name]',
      svgoOptions: false,
    })
  ],
  resolve: {
    alias: {
      // 把 @ 指向到 src 目录去
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
  build: {
    // 消除打包大小超过 500kb 警告,放宽至 1M
    chunkSizeWarningLimit: 1024,
    assetsDir: 'static/assets',
    // 静态资源打包到 dist下的不同目录
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'static/js/[name]-[hash].js',
    //     entryFileNames: 'static/js/[name]-[hash].js',
    //     assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
    //   },
    // },
  },
})
