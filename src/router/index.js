import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authenticate/Login.vue'
import TipoServicio from '../views/TipoServicio.vue'
import Transporte from '../views/Transporte.vue'
import Disponible from '../views/Disponible.vue'
import Agregar from '../views/Agregar.vue'
import ListaServicio from '../views/ListaServicio.vue'
import Mantenimiento from '../views/Mantenimiento.vue'

import EquipmentType from '../views/equipmentsTypes/Index.vue'


const authenticated = (to, from, next) => {
  const token = localStorage.getItem('user-token')
  if (token) {
    next()
    return
  }
  next('/login')
}

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home, beforeEnter: authenticated },
  { path: '/about', name: 'About', component: () => import('../views/About.vue'), beforeEnter: authenticated },
  { path: '/tiposervicio', name: 'TipoServicio', component: TipoServicio, beforeEnter: authenticated},
  { path: '/transporte', name: 'Transporte', component: Transporte, beforeEnter: authenticated },
  { path: '/agregar', name:'Agregar', component: Agregar, beforeEnter: authenticated },
  { path: '/disponible', name: 'Disponible', component: Disponible, beforeEnter: authenticated },
  { path: '/listaservicio', name: 'ListaServicio', component: ListaServicio, beforeEnter: authenticated },
  { path: '/mantenimiento', name: 'Mantenimiento', component: Mantenimiento, beforeEnter: authenticated },


  { path: '/equipments-types', name: 'EquipmentTypes', component: EquipmentType, beforeEnter: authenticated },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
