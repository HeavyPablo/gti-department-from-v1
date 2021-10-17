<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Tipos de servicios</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewServiceType">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
              <table id="serviceTypeTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(service_type, index) in services_types" :key="index">
                            <td class="align-middle">{{ service_type.id }}</td>
                            <td class="align-middle">{{ service_type.name }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditServiceType" 
                                    @click="show(service_type)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(service_type.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
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

const $ = require('jquery')
window.$ = $

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
            const config = {
                language: {
                    url: 'datatables/language/spanish_mexico.json'
                },
                columnDefs: [
                    { targets: 'no-sort', orderable: false},
                ]
            };

            $('#serviceTypeTable').DataTable().destroy();

            await ServiceType.get({}, data => {
                this.services_types = data;
                
                this.$nextTick(() => {
                    $('#serviceTypeTable').DataTable(config);
                })
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
        },


    }
}
</script>