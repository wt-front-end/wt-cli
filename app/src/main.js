import { createApp } from 'vue'
import "@/styles/app.scss"; // global css
import App from './App.vue'
import 'uno.css'
import router from './router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.mount('#app')
