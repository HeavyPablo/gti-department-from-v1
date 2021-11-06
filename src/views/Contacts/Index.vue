<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Contactos</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewContact">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="ContactsTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre Completo</th>
                        <th>Telefono Celular </th>
                        <th>Email</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(Contacts, index) in Contacts" :key="index">
                            <td class="align-middle">{{ Contacts.id }}</td>
                            <td class="align-middle">{{ Contacts.full_name }}</td>
                            <td class="align-middle">{{ Contacts.phone_number }}</td>
                            <td class="align-middle">{{ Contacts.email }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditContacts" 
                                    @click="show(Contacts)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(Contacts.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>    
            
        <contactCreate @stored="index"></contactCreate>


        <modal id="dlgEditContact" title="Editar contactos">
            <template v-slot:body>
                <div class="row">                 
                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" v-model="edit.full_name"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Telefono</label>
                        <input type="text" class="form-control" v-model="edit.phone_number"/>
                    </div>
                    
                    <div class="form-group col-sm-12">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" v-model="edit.email"/>
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

import Contacts from '../../services/Contacts';
import ContactsCreate from './Create';
import { Modal } from 'bootstrap';

const $ = require('jquery');

export default {
    components: { ContactsCreate },

    data() {
        return {
            contacts_type: [],
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

            $('#contactsTable').DataTable().destroy();

            await Contacts.get({}, data => {
                this.contacts_type = data;

                this.$nextTick(() => {
                    $('#contactsTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await Contacts.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Contacto actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditContacts')
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
            await Contacts.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Contacto eliminado!',
                    type: 'success'
                });

                this.index();
                
            })
        },
    }
}
</script>