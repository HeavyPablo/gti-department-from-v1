<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Check In</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewRegistration">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="registrationinTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Condicion </th>
                        <th>Firma</th>
                        <th>Descripcion</th>
                        <th>Tipo Registro</th>
                        <th>Renta</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(registration, index) in registrations" :key="index">
                            <td class="align-middle">{{ registration.id }}</td>
                            <td class="align-middle">{{ registration.condition }}</td>
                            <td class="align-middle">{{ registration.signature }}</td>
                            <td class="align-middle">{{ registration.description }}</td>
                            <td class="align-middle">{{ registration.registrationtype.name }}</td>
                            <td class="align-middle">{{ registration.registrationtype.name }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditRegistration" 
                                    @click="show(registration)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(registration.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <Registration-Create :registration_type="registration_type" @stored="index"></Registration-Create>


        <modal id="dlgEditRegistration" title="Editar Check In">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Condiciones</label>
                        <input type="text" class="form-control" v-model="edit.condition"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Firma</label>
                        <input type="text" class="form-control" v-model="edit.signature"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Descripcion</label>
                        <input type="text" class="form-control" v-model="edit.description"/>
                    </div>

                    <div class="form-group col-sm-12">
                            <label class="form-label">Tipo de Registro</label>
                            <select class="form-control" v-model="edit.registrations_types_id">
                                <option v-for="registration_type in registration_type" :key="registration_type.id" :value="registration_type.id">{{registration_type.name}}</option>
                            </select>
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

import Registration from '../../services/Registration' ;
import RegistrationCreate from './Create';
import { Modal } from 'bootstrap';
import RegistrationType from '../../services/RegistrationType';

const $ = require('jquery');

export default {
    components: { RegistrationCreate },

    data() {
        return {
            registrations: [],
            edit: {},
            errors: {},
            registration_type: {}
        }
    },

    created() {
        this.index();
        this.loadData();
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

            $('#registrationinTable').DataTable().destroy();

            await Registration.get({}, data => {
                this.registrations = data;

                this.$nextTick(() => {
                    $('#registrationinTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await Registration.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditRegistration')
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
            await Registration.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In Eliminado' ,
                    type: 'success'
                });

                this.index();
                
            })
        },

        async loadData() {
            await RegistrationType.get({},data => {
                this.registration_type = data
            })

        }
    }
}
</script>