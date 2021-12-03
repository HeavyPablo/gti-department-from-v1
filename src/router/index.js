import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authenticate/Login.vue'
import TipoServicio from '../views/TipoServicio.vue'
import Transporte from '../views/Transporte.vue'
import ListaServicio from '../views/ListaServicio.vue'
import Mantenimiento from '../views/Mantenimiento.vue'



//ADMIN
import AdministratorDepartment from '../views/View-Admin/AdministratorDepartments/Index.vue'
import AdministratorDepartmentShow from '../views/View-Admin/AdministratorDepartments/Show.vue'
import AdministratorService from '../views/View-Admin/AdministratorServices/Index.vue'
import AdministratorReports from '../views/View-Admin/AdministratorReports/Index.vue'


//CLIENT
import SearchDepartment from '../views/View-Client/Search-Department/Index.vue'
import SearchDepartmentShow from '../views/View-Client/Search-Department/Show.vue'

//OFICCIAL
//import CheckIn from '../views/View-Official/CheckIn/Index.vue'
//import CheckOut from '../views/View-Official/CheckOut/Index.vue'



import AdministratorUser from '../views/View-Admin/AdministratorUsers/Index.vue'
import Equipment from '../views/Equipment/Index.vue'
import ServiceType from '../views/servicesTypes/Index.vue'
import PaymentType from '../views/paymentsTypes/Index.vue'
import Transport from '../views/transports/Index.vue'
import Incidence from '../views/Incidences/Index.vue'
import Contact from '../views/Contacts/Index.vue'




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

    //Client
    { path: '/ViewClient/SearchDepartment', name: 'SearchDepartment', component: SearchDepartment, beforeEnter: authenticated },
    { path: '/ViewClient/SearchDepartment/:id', name: 'SearchDepartmentShow', component: SearchDepartmentShow, beforeEnter: authenticated },


    { path: '/listaservicio', name: 'ListaServicio', component: ListaServicio, beforeEnter: authenticated },
    { path: '/mantenimiento', name: 'Mantenimiento', component: Mantenimiento, beforeEnter: authenticated },

    { path: '/administrator/departments', name: 'AdministratorDepartments', component: AdministratorDepartment, beforeEnter: authenticated },
    { path: '/administrator/departments/:id', name: 'AdministratorDepartmentsShow', component: AdministratorDepartmentShow, beforeEnter: authenticated },
    { path: '/administrator/services', name: 'AdministratorServices', component: AdministratorService, beforeEnter: authenticated },
    { path: '/administrator/users', name: 'AdministratorUsers', component: AdministratorUser, beforeEnter: authenticated },
    { path: '/administrator/reports', name: 'AdministratorReports', component: AdministratorReports, beforeEnter: authenticated },

    { path: '/equipments', name: 'Equipment', component: Equipment, beforeEnter: authenticated },
    { path: '/services-types', name: 'ServiceTypes', component: ServiceType, beforeEnter: authenticated },
    { path: '/payments-types', name: 'PaymentTypes', component: PaymentType, beforeEnter: authenticated },
    { path: '/transports', name: 'transports', component: Transport, beforeEnter: authenticated },
    { path: '/incidences', name: 'incidences', component: Incidence, beforeEnter: authenticated },
    { path: '/Contacts', name: 'contacts', component: Contact, beforeEnter: authenticated },
    
    //official
    //{ path: '/ViewOfficial/CheckIn', name: 'CheckIn,', component: CheckIn, beforeEnter: authenticated },
    //{ path: '/ViewOfficial/CheckOut', name: 'CheckOut,', component: CheckOut, beforeEnter: authenticated },

  
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
