<template>
    <div>
        <modal id="dlgNewAdmservice" title="Crear Servicio">
            <template v-slot:body>
                    <div class="col-sm-15">
                                    <div class="row">

                                        <div class="col-8 col-sm-6">
                                            <label class="form-label">Lugar</label>
                                            <input type="text" class="form-control" v-model="create.place"/>
                                        </div>

                                        <div class="col-4 col-sm-6 ">
                                            <label class="form-label">Fecha de ingreso</label>
                                            <input type="date" class="form-control" v-model="create.from_date"/>
                                        </div>

                                        <div class="col-4 col-sm-6 ">
                                            <label class="form-label">Hasta la fecha</label>
                                             <input type="date" class="form-control" v-model="create.to_date"/>
                                        </div>

                                         <div class="col-4 col-sm-6 ">
                                             <label class="form-label">Contacto</label>
                                            <select class="form-control" v-model="create.contacts_id">
                                                <option v-for="contact in contacts" :key="contact.id" :value="contact.id">{{contact.full_name}}</option>
                                            </select>
                                        </div>

                                         <div class="col-4 col-sm-6 ">
                                              <label class="form-label">Tipo de Servicio</label>
                                                <select class="form-control" v-model="create.services_types_id">
                                                    <option v-for="service_type in service_types" :key="service_type.id" :value="service_type.id">{{service_type.name}}</option>
                                                </select>
                                        </div>

                                         <div class="col-4 col-sm-6 ">
                                             <label class="form-label">Transporte</label>
                                            <select class="form-control" v-model="create.transports_id">
                                                <option v-for="transport in transports" :key="transport.id" :value="transport.id">{{transport.vehicle}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
            </template>

            <template v-slot:btnSuccess>
                <button type="button" class="btn btn-primary" @click="store">Guardar</button>
            </template>
        </modal>
    </div>
</template>

<script>

import AdmService from '../../../services/AdministradorServices';

import { Modal } from 'bootstrap'
import ServiceType from '../../../services/ServiceType'
import Contact from '../../../services/Contacts'
import Transport from '../../../services/Transports'


export default {
    data() {
        return {
            create: {},
            errors: {},
            service_types: [],
            contacts: [],
            transports: []
        }
    },

    created() {
        this.loadData()
    },

    methods: {
        async store() {
            this.$toast.clear();

            this.create.from_date = this.create.from_date + ' 00:00:00'
            this.create.to_date = this.create.to_date + ' 00:00:00'

            await AdmService.store(this.create, () => {
                this.$toast.open({
                    message: 'Creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewAdmservice')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
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