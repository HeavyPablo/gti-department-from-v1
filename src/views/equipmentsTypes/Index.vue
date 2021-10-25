<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Tipos de equipamientos</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewEquipmentType">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="equipmentTypeTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(equipment_type, index) in equipments_types" :key="index">
                            <td class="align-middle">{{ equipment_type.id }}</td>
                            <td class="align-middle">{{ equipment_type.name }}</td>
                            <td class="align-middle">{{ equipment_type.description }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditEquipmentType" 
                                    @click="show(equipment_type)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(equipment_type.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
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

import EquipmentType from '../../services/EquipmentType';
import EquipmentTypeCreate from './Create';
import { Modal } from 'bootstrap';

const $ = require('jquery');

export default {
    components: { EquipmentTypeCreate },

    data() {
        return {
            equipments_types: [],
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

            $('#equipmentTypeTable').DataTable().destroy();

            await EquipmentType.get({}, data => {
                this.equipments_types = data;

                this.$nextTick(() => {
                    $('#equipmentTypeTable').DataTable(config);
                })
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
        },
    }
}
</script>