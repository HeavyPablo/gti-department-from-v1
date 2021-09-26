import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authenticate/Login.vue'
import TipoServicio from '../views/TipoServicio.vue'
import Transporte from '../views/Transporte.vue'

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/tiposervicio', name: 'TipoServicio', component: TipoServicio},
  { path: '/transporte', name: 'Transporte', component: Transporte}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router