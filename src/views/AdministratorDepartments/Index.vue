<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Administrar departamentos</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewDepartment">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="administratorDepartmentTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Estado</th>
                        <th>Capacidad</th>
                        <th>Dormitorios</th>
                        <th>Baños</th>
                        <th>Dirección</th>
                        <th>Valor</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(department, index) in departments" :key="index">
                            <td class="align-middle">{{ department.id }}</td>
                            <td class="align-middle">{{ department.status }}</td>
                            <td class="align-middle">{{ department.capacity }}</td>
                            <td class="align-middle">{{ department.bedroom }}</td>
                            <td class="align-middle">{{ department.bathroom }}</td>
                            <td class="align-middle">{{ department.address }}</td>
                            <td class="align-middle">{{ department.value }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditDepartment" 
                                    @click="show(department)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(department.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <department-create @stored="index"></department-create>


        <modal id="dlgEditDepartment" title="Editar departamento">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Dirección</label>
                        <input type="text" class="form-control" v-model="edit.address"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Capacidad</label>
                        <input type="text" class="form-control" v-model="edit.capacity"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Dormitorios</label>
                        <input type="text" class="form-control" v-model="edit.bedroom"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Baños</label>
                        <input type="text" class="form-control" v-model="edit.bathroom"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Valor</label>
                        <input type="text" class="form-control" v-model="edit.value"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Descripción</label>
                        <textarea class="form-control" rows="3" v-model="edit.description"></textarea>
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
import Department from '../../services/Department';
import DepartmentCreate from './Create';
import { Modal } from 'bootstrap';

const $ = require('jquery');

export default {
    components: { DepartmentCreate },

    data() {
        return {
            departments: [],
            edit: {}
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

            $('#administratorDepartmentTable').DataTable().destroy();

            await Department.get({}, data => {
                this.departments = data;

                this.$nextTick(() => {
                    $('#administratorDepartmentTable').DataTable(config);
                });
            });
        },

        async update() {
            this.$toast.clear();
            await Department.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Departamento actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditDepartment')
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
            await Department.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Departamento eliminado!',
                    type: 'success'
                });

                this.index();
            })
        },
    }

}
</script>