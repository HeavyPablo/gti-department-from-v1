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
                        <a class="d-flex align-items-center" href="/login">
                            <vue-feather type="log-in"></vue-feather>
                            <span class="menu-title text-truncate">Iniciar sesión</span>
                        </a>
                    </li>

                    <li class=" navigation-header">
                        Departamentos
                        <i data-feather="more-horizontal"></i>
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="departamento">
                            <vue-feather type="check-circle"></vue-feather>
                            <span class="menu-title text-truncate">Departamento</span>
                        </a>
                     
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="/">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Todos</span>
                        </a>
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="mantenimiento">
                            <vue-feather type="tool"></vue-feather>
                            <span class="menu-title text-truncate">Mantenciones</span>
                        </a>
                    </li>

                    <li class=" navigation-header">
                        Servicios
                        <i data-feather="more-horizontal"></i>
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="/listaservicio">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Lista de servicios</span>
                        </a>
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="/tiposervicio">
                            <vue-feather type="airplay"></vue-feather>
                            <span class="menu-title text-truncate">Tipos de servicios</span>
                        </a>
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="/transporte">
                            <vue-feather type="truck"></vue-feather>
                            <span class="menu-title text-truncate">Transporte</span>
                        </a>
                    </li>

                    <li class=" navigation-header">
                        Configuración
                        <i data-feather="more-horizontal"></i>
                    </li>

                    <li class=" nav-item">
                        <a class="d-flex align-items-center" href="/equipments-types">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Tipos de equipamientos</span>
                        </a>
                    </li>

                     <li class=" nav-item">
                        <a class="d-flex align-items-center" href="/services-types">
                            <vue-feather type="list"></vue-feather>
                            <span class="menu-title text-truncate">Tipos de servicios</span>
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
    
}
</script>

<style scoped src="@/assets/css/core/menu/menu-types/vertical-menu.css"></style>