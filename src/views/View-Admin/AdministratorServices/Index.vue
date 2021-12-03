<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Administrar servicios</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewAdmservice">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="admserviceTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Lugar</th>
                        <th>Desde Fecha</th>
                        <th>Hasta Fecha</th>
                        <th>Contacto</th>
                        <th>Tipo Servicio</th>
                        <th>Transporte</th>
                        
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(admservice, index) in admservices" :key="index">
                            <td class="align-middle">{{ admservice.id }}</td>
                            <td class="align-middle">{{ admservice.place }}</td>
                            <td class="align-middle">{{ admservice.from_date }}</td>
                            <td class="align-middle">{{ admservice.to_date }}</td>
                            <td class="align-middle">{{ admservice.contact.full_name }}</td>
                            <td class="align-middle">{{ admservice.servicetypes.name }}</td>
                            <td class="align-middle">{{ admservice.transport.patent }}</td>
                            
                           
                           
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditAdmservice" 
                                    @click="show(admservice)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(admservice.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <adm-service-create :contacts="contacts" :service_types="service_types" :transports="transports" @stored="index"></adm-service-create>


        <modal id="dlgEditAdmservice" title="Editar">
            <template v-slot:body>
                <div class="row">
                        <div class="form-group col-sm-12">
                            <label class="form-label">Lugar</label>
                            <input type="text" class="form-control" v-model="edit.place"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Desde Fecha</label>
                            <input type="date" class="form-control" v-model="edit.from_date"/>
                        </div>

                         <div class="form-group col-sm-12">
                            <label class="form-label">Hasta Fecha</label>
                            <input type="date" class="form-control" v-model="edit.to_date"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Contacto</label>
                            <select class="form-control" v-model="edit.contacts_id">
                                <option v-for="contact in contacts" :key="contact.id" :value="contact.id">{{contact.full_name}}</option>
                            </select>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Tipo de Servicio</label>
                            <select class="form-control" v-model="edit.services_types_id">
                                <option v-for="service_type in service_types" :key="service_type.id" :value="service_type.id">{{service_type.name}}</option>
                            </select>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Transporte</label>
                            <select class="form-control" v-model="edit.transports_id">
                                <option v-for="transport in transports" :key="transport.id" :value="transport.id">{{transport.patent}}</option>
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

import AdmService from '../../../services/AdministradorServices';
import AdmServiceCreate from './Create';
import { Modal } from 'bootstrap';
import ServiceType from '../../../services/ServiceType';
import Contact from '../../../services/Contacts';
import Transport from '../../../services/Transports';


const $ = require('jquery');

export default {
    components: { AdmServiceCreate },

    data() {
        return {
            admservices: [],
            edit: {},
            errors: {},
            service_types: [],
            contacts: [],
            transports: []
          
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

            $('#admserviceTable').DataTable().destroy();

            await AdmService.get({}, data => {
                this.admservices = data;

                this.$nextTick(() => {
                    $('#admserviceTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();

            this.create.from_date = this.create.from_date + ' 00:00:00'
            this.create.to_date = this.create.to_date + ' 00:00:00'

            await AdmService.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditAdmservic')
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
            await AdmService.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Eliminado!',
                    type: 'success'
                });

                this.index();
                
            })
        },

      async loadData() {
            await ServiceType.get({},data => {
                this.service_types = data
            })

            await Contact.get({},data => {
                this.contacts = data
            })

            await Transport.get({},data => {
                this.transports = data
            })

        }

    }

       
        

}
</script>