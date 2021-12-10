<template>
    <div>
        <div class="content-wrapper container-xxl p-0">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-start mb-0">Búsqueda de departamentos</h2>
                            <div class="breadcrumb-wrapper">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">departamentos disponibles</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-detached content-right">
                <div class="content-body">
                    <section id="ecommerce-products" class="grid-view">
                        <div v-for="searchdepartment in searchdepartments" :key="searchdepartment.id" class="card ecommerce-card width-400">
                            <div class="item-img text-center">
                                <img v-if="searchdepartment.files && searchdepartment.files[0]" :src="searchdepartment.files[0].file_base64" alt="" class="img-fluid" style="height: 180px">

                                <svg v-else class="bd-placeholder-img card-img-top text-center" width="100%" height="180"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
                                     preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#868e96"></rect>
                                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Cargando imagen..</text>
                                </svg>
                            </div>
                            <div class="card-body">
                                <div class="item-wrapper d-flex">
                                    <div class="item-rating flex-fill">
                                        <ul class="unstyled-list list-inline">
                                            <li class="ratings-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star filled-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></li>
                                            <li class="ratings-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star filled-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></li>
                                            <li class="ratings-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star filled-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></li>
                                            <li class="ratings-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star filled-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></li>
                                            <li class="ratings-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star unfilled-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 class="item-price">${{ searchdepartment.value }}</h6>
                                    </div>
                                </div>
                                <h6 class="item-name">
                                    <a class="text-body">{{ searchdepartment.address }}</a>
                                </h6>
                                <p class="card-text item-description">{{ searchdepartment.description }}</p>

                                <div class="text-primary my-1">
                                    <vue-feather class="me-1" v-if="hasEquipment(searchdepartment, 'WIFI')" type="wifi"></vue-feather>
                                    <vue-feather class="me-1" v-if="hasEquipment(searchdepartment, 'AIRE ACONDICIONADO')" type="wind"></vue-feather>
                                    <vue-feather class="me-1" v-if="hasEquipment(searchdepartment, 'TELEVISORES')" type="tv"></vue-feather>
                                    <vue-feather class="me-1" v-if="hasEquipment(searchdepartment, 'TV CABLE')" type="radio"></vue-feather>
                                </div>

                                <div class="text-secondary">
                                    <small v-for="equipment in searchdepartment.equipments" :key="equipment.id" class="badge badge-light-success me-1 mb-1">
                                        {{ equipment.name }}
                                    </small>
                                </div>
                            </div>
                            <div class="item-options text-center">
                                <a :href="'/ViewClient/SearchDepartment/' + searchdepartment.id"
                                 class="btn btn-primary btn-cart waves-effect waves-float waves-light w-100"  >
                                    Ver departamento
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div class="sidebar-detached sidebar-left">
                <div class="sidebar">
                    <!-- Ecommerce Sidebar Starts -->
                    <div class="sidebar-shop">
                        <div class="row">
                            <div class="col-sm-12">
                                <h6 class="filter-heading d-none d-lg-block">Filtros</h6>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="mb-3">
                                        <label class="form-label">Capacidad: {{ params.capacity }}</label>
                                        <input type="range" class="form-range" min="1" max="5" v-model="params.capacity">
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Baños: {{ params.bathroom }}</label>
                                        <input type="range" class="form-range" min="1" max="5" v-model="params.bathroom">
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Dormitorios: {{ params.bedroom }}</label>
                                        <input type="range" class="form-range" min="1" max="5" v-model="params.bedroom">
                                    </div>
                                </div>

                                <!-- Clear Filters Starts -->
                                <div class="mb-2">
                                    <button type="button" class="btn w-100 btn-primary waves-effect waves-float waves-light" @click.prevent="search">Aplicar filtros</button>
                                </div>
                                <div>
                                    <button type="button" class="btn w-100 btn-primary waves-effect waves-float waves-light" @click.prevent="clear">Limpiar todos los filtros</button>
                                </div>
                                <!-- Clear Filters Ends -->
                            </div>
                        </div>
                    </div>
                    <!-- Ecommerce Sidebar Ends -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchDepartment from '../../../services/SearchDepartment'
import {Modal} from 'bootstrap'

export default {

    data() {
        return {
            searchdepartments: [],
            edit: {},
            errors: {},
            params: {}
        }
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            this.params.status = 'ACTIVE';

            await SearchDepartment.get(this.params, data => {
                this.searchdepartments = data;
            });
        },

        async update() {
            this.$toast.clear();
            await SearchDepartment.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de equipamiento actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditDepartment')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();

                this.index();
            }, errors => {
                this.errors = errors
            })
        },

        show(element) {
            this.edit = {...element}
        },

        async destroy(element) {
            this.$toast.clear();
            await SearchDepartment.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de equipamiento eliminado!',
                    type: 'success'
                });

                this.index();
            })
        },

        hasEquipment(SearchDepartment, equipment) {
            let result = false;
            SearchDepartment.equipments.forEach(element => {
                if (element.name === equipment) {
                    result = true;
                }
            })
            return result;
        },

        search() {
            this.index();
            this.$toast.clear();
            this.$toast.open({
                message: 'Filtros aplicados!',
                type: 'success'
            });
        },

        clear() {
            this.params = {};
            this.index();
            this.$toast.clear();
            this.$toast.open({
                message: 'Filtros reestablecidos!',
                type: 'success'
            });
        }
    }
}
</script>
<style scoped src="@/assets/css/pages/app-ecommerce.css"></style>