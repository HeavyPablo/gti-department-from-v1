<template>
    <div>

        <div class="card">
            <div class="card-body border-bottom">
                <h4 class="card-title">Tipos de equipamientos</h4>

                <div class="row">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewEquipmentType">
                        <vue-feather type="plus" size="1.5rem"></vue-feather> Agregar
                    </button>
                </div>
            </div>
            <div class="card-datatable table-responsive pt-0">
                <table class="user-list-table table">
                    <thead class="table-ligth">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descipción</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="equipment_type in equipments_types" :key="equipment_type.id">
                            <th scope="row">{{ equipment_type.id }}</th>
                            <td>{{ equipment_type.name }}</td>
                            <td>{{ equipment_type.description }}</td>
                            <td>
                                <div class="d-flex">
                                    <button type="button" class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#dlgEditEquipmentType" @click="show(equipment_type)">
                                        <vue-feather type="edit-2" size="14"></vue-feather>
                                    </button>
                                    <button type="button" class="btn btn-danger mx-2" @click="destroy(equipment_type.id)">
                                        <vue-feather type="trash-2" size="14"></vue-feather>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <equipment-type-create @stored="index"></equipment-type-create>


        <modal id="dlgEditEquipmentType" title="Editar tipo de equipamiento">
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
import EquipmentType from '../../services/EquipmentType'
import EquipmentTypeCreate from './Create'
import { Modal } from 'bootstrap'

export default {
    components: { EquipmentTypeCreate },

    data() {
        return {
            equipments_types: [],
            edit: {},
            errors: {}
        }
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await EquipmentType.get({}, data => {
                this.equipments_types = data;
            });
        },

        async update() {
            this.$toast.clear();
            await EquipmentType.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de equipamiento actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditEquipmentType')
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
            await EquipmentType.destroy(element, () => {

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