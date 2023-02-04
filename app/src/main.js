import { createApp } from 'vue'
import '@/style/style.css'
import '@/style/weather.css'
import App from './App.vue'
import 'uno.css'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
