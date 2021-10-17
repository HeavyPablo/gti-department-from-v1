<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Transporte</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewTransport">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="transporTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Vehículo</th>
                        <th>Patente</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(transport, index) in transports" :key="index">
                            <td class="align-middle">{{ transport.id }}</td>
                            <td class="align-middle">{{ transport.vehicle }}</td>
                            <td class="align-middle">{{ transport.patent }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditTransport" 
                                    @click="show(transport)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(transport.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <transport-create @stored="index"></transport-create>


        <modal id="dlgEditTransport" title="Editar tipo de transporte">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Vehículo</label>
                        <input type="text" class="form-control" v-model="edit.vehicle"/>
                    </div>

                     <div class="form-group col-sm-12">
                        <label class="form-label">Patente</label>
                        <input type="text" class="form-control" v-model="edit.patent"/>
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

import Transport from '../../services/Transports';
import TransportCreate from './Create';
import { Modal } from 'bootstrap';



const $ = require('jquery')

export default {
    components: { TransportCreate },

    data() {
        return {
            transports: [],
            edit: {},
            errors: {},
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

            $('#transportTable').DataTable().destroy();

            await Transport.get({}, data => {
                this.transports = data;
                
                this.$nextTick(() => {
                    $('#transportTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await Transport.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de transporte actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditTransport')
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
            await Transport.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de transporte eliminado!',
                    type: 'success'
                });

                this.index();
              
            })
        },

    }
}
</script>