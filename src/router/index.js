import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authenticate/Login.vue'
import TipoServicio from '../views/TipoServicio.vue'
import Transporte from '../views/Transporte.vue'
import ListaServicio from '../views/ListaServicio.vue'
import Mantenimiento from '../views/Mantenimiento.vue'

import Departamento from '../views/Department/Index.vue'

import AdministratorDepartment from '../views/AdministratorDepartments/Index.vue'
import AdministratorService from '../views/AdministratorServices/Index.vue'
import AdministratorUser from '../views/AdministratorUsers/Index.vue'

import EquipmentType from '../views/equipmentsTypes/Index.vue'
import ServiceType from '../views/servicesTypes/Index.vue'
import PaymentType from '../views/paymentsTypes/Index.vue'
import Transport from '../views/transports/Index.vue'
import Incidence from '../views/Incidences/Index.vue'
import Contact from '../views/Contacts/Index.vue'
import CheckIn from '../views/CheckIn/Index.vue' 


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
  { path: '/departamento', name: 'Departamento', component: Departamento, beforeEnter: authenticated },
  { path: '/listaservicio', name: 'ListaServicio', component: ListaServicio, beforeEnter: authenticated },
  { path: '/mantenimiento', name: 'Mantenimiento', component: Mantenimiento, beforeEnter: authenticated },

  { path: '/administrator/departments', name: 'AdministratorDepartments', component: AdministratorDepartment, beforeEnter: authenticated },
  { path: '/administrator/services', name: 'AdministratorServices', component: AdministratorService, beforeEnter: authenticated },
  { path: '/administrator/users', name: 'AdministratorUsers', component: AdministratorUser, beforeEnter: authenticated },

  { path: '/equipments-types', name: 'EquipmentTypes', component: EquipmentType, beforeEnter: authenticated },
  { path: '/services-types', name: 'ServiceTypes', component: ServiceType, beforeEnter: authenticated },
  { path: '/payments-types', name: 'PaymentTypes', component: PaymentType, beforeEnter: authenticated },
  { path: '/transports', name: 'transports', component: Transport, beforeEnter: authenticated },
  { path: '/incidences', name: 'incidences', component: Incidence, beforeEnter: authenticated },
  { path: '/Contacts', name: 'contacts', component: Contact, beforeEnter: authenticated },
  { path: '/CheckIn', name: 'checkIn,', component: CheckIn, beforeEnter: authenticated },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
