<template>
    <div>

        <div class="card">
            <div class="card-body border-bottom">
                <h4 class="card-title">Departamento disponible</h4>

                <div class="row ">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#dlgNewDepartment">
                        <vue-feather type="plus" size="1.5rem"></vue-feather> Agregar</button>
                </div>
            </div>
            <div class="card-datatable table-responsive pt-0">
                <table class="user-list-table table">
                    <thead class="table-ligth">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Capacidad</th>
                        <th scope="col">Cuarto</th>
                        <th scope="col">cuarto de baño</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">valor</th>
                        <th scope="col">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Department in department_availables" :key="Department.id">
                            <th scope="row">{{ Department.id }}</th>
                            <td>{{ Department.status }}</td>
                            <td>{{ Department.capacity}}</td>
                            <td>{{ Department.bedrom}}</td>
                            <td>{{ Department.bathroom}}</td>
                            <td>{{ Department.address}}</td>
                            <td>{{ Department.value}}</td>
                            <td>{{ Department.description}}</td>
                            <td>
                                <div class="d-flex">
                                    <button type="button" class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#dlgEditDepartment" @click="show(Department)">
                                        <vue-feather type="edit-2" size="14"></vue-feather>
                                    </button>
                                    <button type="button" class="btn btn-danger mx-2" @click="destroy(Department.id)">
                                        <vue-feather type="trash-2" size="14"></vue-feather>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


      

     <Department-Create @stored="index"></Department-Create>


        <modal id="dlgEditDepartment" title="Editar Departamento">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" v-model="edit.name"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Descripción</label>
                        <input type="text" class="form-control" v-model="edit.description"/>
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
import Department from '../../services/Department'
import { Modal } from 'bootstrap'
import DepartmentCreate from './Create.vue'

export default {
    components: { DepartmentCreate },

    data() {
        return {
            department_availables: [],
            edit: {},
            errors: {}
        }
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await Department.get({}, data => {
                this.department_availables = data;
            });
        },

        async update() {
            this.$toast.clear();
            await Department.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de equipamiento actualizado!',
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
                    message: 'Tipo de equipamiento eliminado!',
                    type: 'success'
                });

                this.index();
            })
        }
    }
}
</script>