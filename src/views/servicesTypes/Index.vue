<template>
    <div>

        <div class="card">
            <div class="card-body border-bottom">
                <h4 class="card-title">Tipos de servicios</h4>

                <div class="row">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewServiceType">
                        <vue-feather type="plus" size="1.5rem"></vue-feather> Agregar
                    </button>
                </div>
            </div>
            <div class="card-datatable table-responsive pt-0">
                <table class="user-list-table table">
                    <thead class="table-ligth">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="service_type in services_types" :key="service_type.id">
                            <th scope="row">{{ service_type.id }}</th>
                            <td>{{ service_type.name }}</td>
                            <td>
                                <div class="d-flex">
                                    <button type="button" class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#dlgEditServiceType" @click="show(service_type)">
                                        <vue-feather type="edit-2" size="14"></vue-feather>
                                    </button>
                                    <button type="button" class="btn btn-danger mx-2" @click="destroy(service_type.id)">
                                        <vue-feather type="trash-2" size="14"></vue-feather>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <service-type-create @stored="index"></service-type-create>


        <modal id="dlgEditServiceType" title="Editar tipo de servicio">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" v-model="edit.name"/>
                    </div>
                </div>
            </template>

            <template v-slot:btnSuccess>
                <button type="button" class="btn btn-primary" @click="update">Guardar</button>
            </template>
        </modal>

        
        
    </div>
</template>

<script>
import ServiceType from '../../services/ServiceType'
import ServiceTypeCreate from './Create'
import { Modal } from 'bootstrap'

export default {
    components: { ServiceTypeCreate },

    data() {
        return {
            services_types: [],
            edit: {},
            errors: {}
        }
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await ServiceType.get({}, data => {
                this.services_types = data;
            });
        },

        async update() {
            this.$toast.clear();
            await ServiceType.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de servicio actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditServiceType')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();

                this.index();
            }, errors => {
                this.errors = errors
            })
        },

        show(element) {
            this.edit = { ...element }
        },

        async destroy(element) {
            this.$toast.clear();
            await ServiceType.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de servicio eliminado!',
                    type: 'success'
                });

                this.index();
            })
        }
    }
}
</script>