<template>
    <div>
        <!-- BEGIN: Main Menu-->
        <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item nav-toggle">
                        <a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
                            <vue-feather class="d-block d-xl-none text-primary toggle-icon font-medium-4" type="x"></vue-feather>
                            <vue-feather class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" type="disc"></vue-feather>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="shadow-bottom"></div>
            <div class="main-menu-content">
                <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="/">
                            <vue-feather type="home"></vue-feather>
                            <span class="menu-title text-truncate">Inicio</span>
                        </a>
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" @click="logOut">
                            <vue-feather type="log-in"></vue-feather>
                            <span class="menu-title text-truncate">Cerrar sesión</span>
                        </a>
                    </li>

                    <li v-if="role === 'client'" class=" nav-item bg-gradient-danger">
                        <a class="d-flex align-items-center text-white" href="#">
                            <vue-feather type="dollar-sign"></vue-feather>
                            <span class="menu-title text-truncate">Mis pagos pendientes</span>
                        </a>
                    </li>

                    <li v-if="role === 'client' || role === 'official'" class=" navigation-header">
                        Departamentos
                        <i data-feather="more-horizontal"></i>
                    </li>

                    <li v-if="role === 'client'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/ViewClient/SearchDepartment">
                            <vue-feather type="check-circle"></vue-feather>
                            <span class="menu-title text-truncate">Buscar departamentos</span>
                        </a>
                     
                    </li>

                    <li v-if="role === 'client'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Mis reservas</span>
                        </a>
                    </li>

                    <li v-if="role === 'client'" class=" nav-item">
                        <a class="d-flex align-items-center" href="mantenimiento">
                            <vue-feather type="tool"></vue-feather>
                            <span class="menu-title text-truncate">Ofertas</span>
                        </a>
                    </li>

                    <li v-if="role === 'official'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/Registration">
                            <vue-feather type="tool"></vue-feather>
                            <span class="menu-title text-truncate">Check-in</span>
                        </a>
                    </li>

                    <li v-if="role === 'official'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/CheckOut">
                            <vue-feather type="tool"></vue-feather>
                            <span class="menu-title text-truncate">Check-out</span>
                        </a>
                    </li>

                    <li v-if="role === 'official'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/incidences">
                            <vue-feather type="tool"></vue-feather>
                            <span class="menu-title text-truncate">Registrar incidencias</span>
                        </a>
                    </li>

                    <li v-if="role === 'client'" class=" navigation-header">
                        Servicios
                        <i data-feather="more-horizontal"></i>
                    </li>

                    <li v-if="role === 'client'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/listaservicio">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Buscar servicios</span>
                        </a>
                    </li>

                    <li v-if="role === 'client'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/tiposervicio">
                            <vue-feather type="airplay"></vue-feather>
                            <span class="menu-title text-truncate">Mis servicios</span>
                        </a>
                    </li>

                    <li v-if="role === 'client'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/transporte">
                            <vue-feather type="truck"></vue-feather>
                            <span class="menu-title text-truncate">Ofertas</span>
                        </a>
                    </li>

                    <li v-if="role === 'admin'" class=" navigation-header">
                        Administración
                        <i data-feather="more-horizontal"></i>
                    </li>

                    <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/administrator/departments">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Administrar departamentos</span>
                        </a>
                    </li>

                    <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/administrator/services">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Administrar servicios</span>
                        </a>
                    </li>

                    <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/administrator/users">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Administrar usuarios</span>
                        </a>
                    </li>


                    <li v-if="role === 'admin'" class=" navigation-header">
                        Configuración
                        <i data-feather="more-horizontal"></i>
                    </li>

                    <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/equipments">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Tipos de equipamientos</span>
                        </a>
                    </li>

                     <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/services-types">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Tipos de servicios</span>
                        </a>
                    </li>

                    <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/payments-types">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Tipos de pagos</span>
                        </a>
                    </li>

                    <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/transports">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Transporte</span>
                        </a>
                    </li>

                    <li v-if="role === 'admin'" class=" nav-item">
                        <a class="d-flex align-items-center" href="/contacts">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Contactos</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
            <!-- END: Main Menu-->
    </div>
</template>

<script>


export default {
    data() {
        return {
            role: localStorage.getItem('role')
        }
    },

    methods: {
        logOut() {
            localStorage.setItem('user-token', '');
            localStorage.setItem('token-refresh', '');
            localStorage.setItem('username', '');
            localStorage.setItem('role', '');

            location.reload();
        }
    }
}
</script>

<style scoped src="@/assets/css/core/menu/menu-types/vertical-menu.css"></style>