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
                <table id="contactTable" class="table">
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
                        <tr v-for="(contact, index) in contacts" :key="index">
                            <td class="align-middle">{{ contact.id }}</td>
                            <td class="align-middle">{{ contact.full_name }}</td>
                            <td class="align-middle">{{ contact.phone_number }}</td>
                            <td class="align-middle">{{ contact.email }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditContact" 
                                    @click="show(contact)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(contact.id)">
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

import Contact from '../../services/Contacts';
import ContactCreate from './Create';
import { Modal } from 'bootstrap';

const $ = require('jquery');

export default {
    components: { ContactCreate },

    data() {
        return {
            contacts: [],
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

            $('#contactTable').DataTable().destroy();

            await Contact.get({}, data => {
                this.contacts = data;

                this.$nextTick(() => {
                    $('#contactTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await Contact.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Contacto actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditContact')
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
            await Contact.destroy(element, () => {

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