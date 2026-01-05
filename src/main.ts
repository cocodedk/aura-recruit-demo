import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Set favicon dynamically to respect base URL
const faviconLink = document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/svg+xml'
faviconLink.href = `${import.meta.env.BASE_URL}favicon.svg`
document.head.appendChild(faviconLink)

const app = createApp(App)

app.use(router)

app.mount('#app')
