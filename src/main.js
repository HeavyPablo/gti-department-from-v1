import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueFeather from 'vue-feather';
import VueToast from 'vue-toast-notification';

import '@/assets/css/bootstrap.css';
import '@/assets/css/bootstrap-extended.css';
import '@/assets/css/colors.css';
import '@/assets/css/components.css';
import '@/assets/css/themes/dark-layout.css';
import '@/assets/css/themes/bordered-layout.css';
import '@/assets/css/themes/semi-dark-layout.css';

import '@/assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css';
import '@/assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css';
import '@/assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css';
import '@/assets/vendors/css/tables/datatable/rowGroup.bootstrap5.min.css';
import '@/assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css';

import 'vue-toast-notification/dist/theme-sugar.css';



const app = createApp(App);

app.component('VueFeather', VueFeather);

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080/';

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

app.use(router);
app.use(VueToast);

app.mount('#app');





