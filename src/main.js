import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueFeather from 'vue-feather'

import '@/assets/css/bootstrap.css';
import '@/assets/css/bootstrap-extended.css';
import '@/assets/css/colors.css';
import '@/assets/css/components.css';
import '@/assets/css/themes/dark-layout.css';
import '@/assets/css/themes/bordered-layout.css';
import '@/assets/css/themes/semi-dark-layout.css';

const app = createApp(App);

app.component('VueFeather', VueFeather);


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://localhost:8000/';

app.use(router).mount('#app');
