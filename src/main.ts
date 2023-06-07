import { createApp } from 'vue'
import App from '@/App.vue'
// import installIcon from '@/plugins/installIcon'
import './style/main.css'
import 'virtual:svg-icons-register'

// 解决 tailwindcss 与 naive-ui 的冲突
// https://www.naiveui.com/zh-CN/os-theme/docs/style-conflict
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
// app.use(installIcon)
app.mount('#app')
