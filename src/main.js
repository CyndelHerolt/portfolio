import './assets/styles/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue);
app.use(router)

app.mount('#app')
