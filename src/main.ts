import { createApp } from 'vue'
import './style/main.css'
import App from '@/App.vue'

// 解决 tailwindcss 与 naive-ui 的冲突
// https://www.naiveui.com/zh-CN/os-theme/docs/style-conflict
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
createApp(App).mount('#app')
