import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authenticate/Login.vue'
import TipoServicio from '../views/TipoServicio.vue'
import Transporte from '../views/Transporte.vue'
import Disponible from '../views/Disponible.vue'
import Agregar from '../views/Agregar.vue'
import ListaServicio from '../views/ListaServicio.vue'
import Mantenimiento from '../views/Mantenimiento.vue'


const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/tiposervicio', name: 'TipoServicio', component: TipoServicio},
  { path: '/transporte', name: 'Transporte', component: Transporte},
  { path: '/agregar', name:'Agregar', component: Agregar},
  { path: '/disponible', name: 'Disponible', component: Disponible },
  { path: '/listaservicio', name: 'ListaServicio', component: ListaServicio },
  { path: '/mantenimiento', name: 'Mantenimiento', component: Mantenimiento }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
