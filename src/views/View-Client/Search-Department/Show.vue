<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">

            </div>
            <div class="card-body">
                <form class="form">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div id="preview" class="">
                                <viewer-files :files="department.files"></viewer-files>
                            </div>
                        </div>


                        <div class="col-md-6 col-12">
                            <h4>Departamento</h4>
                            <span class="card-text item-company">{{ department.address }}</span>
                            <div class="ecommerce-details-price d-flex flex-wrap mt-1">
                                <h4 class="item-price me-1 text-primary">${{ department.value }}</h4>
                                <ul class="unstyled-list list-inline ps-1 border-start">
                                    <li class="ratings-list-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class="feather feather-star filled-star">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </li>
                                    <li class="ratings-list-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class="feather feather-star filled-star">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </li>
                                    <li class="ratings-list-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class="feather feather-star filled-star">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </li>
                                    <li class="ratings-list-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class="feather feather-star filled-star">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </li>
                                    <li class="ratings-list-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class="feather feather-star unfilled-star">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <p class="card-text">Disponibilidad - <span :class="classTextStatus">{{ textStatus }}</span>
                            </p>
                            <p class="card-text">{{ department.description }}</p>

                            <hr>

                            <ul class="list-unstyled fw-bolder my-3">
                                <li>{{ department.capacity }} <span class="ms-3">Capacidad</span></li>
                                <li>{{ department.bathroom }} <span class="ms-3">Baños</span></li>
                                <li>{{ department.bedroom }} <span class="ms-3">Dormitorios</span></li>
                            </ul>

                            <hr>

                            <ul class="list-inline list-unstyled fw-bolder my-3">
                                <li v-if="hasEquipment('WIFI')">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <vue-feather type="wifi" class="ms-3 me-1 text-primary"></vue-feather>
                                        Wifi
                                    </div>
                                </li>
                                <li v-if="hasEquipment('AIRE ACONDICIONADO')">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <vue-feather type="wind" class="ms-3 me-1 text-primary"></vue-feather>
                                        Aire acondicionado
                                    </div>
                                </li>
                                <li v-if="hasEquipment('TELEVISORES')">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <vue-feather type="tv" class="ms-3 me-1 text-primary"></vue-feather>
                                        Televisores
                                    </div>
                                </li>
                                <li v-if="hasEquipment('TV CABLE')">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <vue-feather type="radio" class="ms-3 me-1 text-primary"></vue-feather>
                                        TV cable
                                    </div>
                                </li>
                            </ul>

                            <hr>

                            <a href="#dlgRent" data-bs-toggle="modal" data-bs-target="#dlgRent" class="btn btn-primary">Arrendar</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <send :department="department"></send>
</template>

<script>

import SearchDepartment from "../../../services/SearchDepartment";
import Send from "./Partials/Send.vue"

export default {
    components: {Send},

    data() {
        return {
            department: {}
        }
    },

    computed: {
        textStatus() {
            if (this.department.status === 'ACTIVE') {
                return 'Disponible'
            }
            if (this.department.status === 'IN_USE') {
                return 'En uso'
            }
            if (this.department.status === 'IN_MAINTENANCE') {
                return 'En mantención'
            }
            if (this.department.status === 'INACTIVE') {
                return 'No disponible'
            }
            return '';
        },

        classTextStatus() {
            if (this.department.status === 'ACTIVE') {
                return 'text-success'
            }
            if (this.department.status === 'IN_USE') {
                return 'text-warning'
            }
            if (this.department.status === 'IN_MAINTENANCE') {
                return 'text-warning'
            }
            if (this.department.status === 'INACTIVE') {
                return 'text-danger'
            }
            return '';
        },


    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await SearchDepartment.show(this.$route.params.id, data => {
                this.department = data;
            })
        },

        hasEquipment(equipment) {
            let result = false;
            if (this.department.equipments && this.department.equipments.length > 0) {
                this.department.equipments.forEach(element => {
                    if (element.name === equipment) {
                        result = true;
                    }
                })
            }

            return result;
        },
    }
}
</script>

