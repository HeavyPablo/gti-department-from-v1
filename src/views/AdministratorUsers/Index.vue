<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Administrar usuarios</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewAdmUser">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="admUserTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre Usuario</th>
                      
                        <th>Estado</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Dirección</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(admuser, index) in admusers" :key="index">
                            <td class="align-middle">{{ admuser.id }}</td>
                            <td class="align-middle">{{ admuser.username }}</td>
                    
                            <td class="align-middle">{{ admuser.status }}</td>
                            <td class="align-middle">{{ admuser.name }}</td>
                            <td class="align-middle">{{ admuser.last_name }}</td>
                            <td class="align-middle">{{ admuser.address }}</td>
                            <td class="align-middle">{{ admuser.email }}</td>
                            <td class="align-middle">{{ admuser.phone_number }}</td>

                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditAdmUser" 
                                    @click="show(admuser)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(admuser.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <adm-user-create @stored="index"></adm-user-create>


        <modal id="dlgEditAdmUser" title="Editar">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre Usuario</label>
                        <input type="text" class="form-control" v-model="edit.username"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Contraseña</label>
                        <input type="text" class="form-control" v-model="edit.password"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Estado</label>
                        <input type="text" class="form-control" v-model="edit.status"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" v-model="edit.name"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Apellido</label>
                        <input type="text" class="form-control" v-model="edit.last_name"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Dirección</label>
                        <input type="text" class="form-control" v-model="edit.address"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Correo</label>
                        <input type="text" class="form-control" v-model="edit.email"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Teléfono</label>
                        <input type="text" class="form-control" v-model="edit.phone_number"/>
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

import AdmUser from '../../services/AdministradorUsers';
import AdmUserCreate from './Create';
import { Modal } from 'bootstrap';



const $ = require('jquery')

export default {
    components: { AdmUserCreate },

    data() {
        return {
            admusers: [],
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

            $('#admUserTable').DataTable().destroy();

            await AdmUser.get({}, data => {
                this.admusers = data;
                
                this.$nextTick(() => {
                    $('#admUserTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await AdmUser.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditAdmUser')
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
            await AdmUser.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'eliminado!',
                    type: 'success'
                });

                this.index();
              
            })
        },

    }
}
</script>