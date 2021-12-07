<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Reservas pendientes para realizar check in</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewCheckIn">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="checkinTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Tarifa</th>
                        <th>Condiciones de Uso</th>
                        <th>Descripcion</th>
                        <th>Valor</th>
                        <th>Total Personas</th>
                        <th>Departments_id</th>
                        <th>Users_id</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(checkin, index) in checkins" :key="index">
                            <td class="align-middle">{{ checkin.id }}</td>
                            <td class="align-middle">{{ checkin.rate }}</td>
                            <td class="align-middle">{{ checkin.use_conditions }}</td>
                            <td class="align-middle">{{ checkin.description }}</td>
                            <td class="align-middle">{{ checkin.value }}</td>
                            <td class="align-middle">{{ checkin.total_tenants }}</td>
                            <td class="align-middle">{{ checkin.departments_id }}</td>
                            <td class="align-middle">{{ checkin.users_id }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditCkeckIn" 
                                    @click="show(checkin)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(checkin.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <CheckInCreate @stored="index"></CheckInCreate>


        <modal id="dlgEditCheckIn" title="Editar Check In">
            <template v-slot:body>
                <div class="row">
                  

                </div>
            </template>

            <template v-slot:btnSuccess>
                <button type="button" class="btn btn-primary" @click="update">Guardar</button>
            </template>
        </modal>     
    </div>
</template>

<script>

import CheckIn from '../../services/CheckIn';
import CheckInCreate from './Create';
import { Modal } from 'bootstrap';

const $ = require('jquery');

export default {
    components: { CheckInCreate },

    data() {
        return {
            checkins: [],
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
                    url: '/datatables/language/spanish_mexico.json'
                },
                columnDefs: [
                    { targets: 'no-sort', orderable: false},
                ]
            };

            $('#checkinTable').DataTable().destroy();

            await CheckIn.get({}, data => {
                this.checkins = data;

                this.$nextTick(() => {
                    $('#checkinTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await CheckIn.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditCheckIn')
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
            await CheckIn.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In Eliminado' ,
                    type: 'success'
                });

                this.index();
                
            })
        },

    }
}
</script>