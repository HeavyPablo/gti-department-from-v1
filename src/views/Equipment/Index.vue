<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Equipamientos</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewEquipment">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="equipmentTable" class="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descipción</th>
                        <th>Tipo de equipamiento</th>
                        <th class="no-sort text-end">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(equipment, index) in equipments" :key="index">
                        <td class="align-middle">{{ equipment.id }}</td>
                        <td class="align-middle">{{ equipment.name }}</td>
                        <td class="align-middle">{{ equipment.description }}</td>
                        <td class="align-middle">
                            {{ equipment.equipmentType ? equipment.equipmentType.name : '' }}
                        </td>
                        <td class="align-middle text-end">
                            <button type="button" class="btn btn-warning mx-2"
                                    data-bs-toggle="modal" data-bs-target="#dlgEditEquipment"
                                    @click="show(equipment)">
                                <vue-feather type="edit-2" size="14"></vue-feather>
                            </button>
                            <button type="button" class="btn btn-danger mx-2" @click="destroy(equipment.id)">
                                <vue-feather type="trash-2" size="14"></vue-feather>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>


        <equipment-create :equipmentsTypes="equipments_types" @stored="index"></equipment-create>


        <modal id="dlgEditEquipment" title="Editar equipamiento">
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

                    <div class="form-group col-sm-12">
                        <label class="form-label">Tipo de equipamiento</label>
                        <select class="form-select" v-model="edit.equipments_types_id">
                            <option v-for="equipment_type in equipments_types" :key="equipment_type.id" :value="equipment_type.id">{{ equipment_type.name }}</option>
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

import EquipmentType from '../../services/EquipmentType';
import EquipmentCreate from './Create';
import { Modal } from 'bootstrap';
import Equipment from "@/services/Equipment";

const $ = require('jquery');

export default {
    components: { EquipmentCreate },

    data() {
        return {
            equipments: [],
            equipments_types: [],
            edit: {},
            errors: {},
        }
    },

    created() {
        this.index();
        this.loadData();
    },

    methods: {
        async loadData() {
            await EquipmentType.get({}, data => {
                this.equipments_types = data;
            });
        },

        async index() {
            const config = {
                language: {
                    url: 'datatables/language/spanish_mexico.json'
                },
                columnDefs: [
                    { targets: 'no-sort', orderable: false},
                ]
            };

            $('#equipmentTable').DataTable().destroy();

            await Equipment.get({}, data => {
                this.equipments = data;

                this.$nextTick(() => {
                    $('#equipmentTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await Equipment.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Equipamiento actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditEquipment')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();

                this.index();
            }, errors => {
                this.errors = errors
            })
        },

        show(element) {
            this.edit = { ...element }
            this.edit.equipments_types_id = element.equipmentType ? element.equipmentType.id : '';
        },

        async destroy(element) {
            this.$toast.clear();
            await Equipment.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Equipamiento eliminado!',
                    type: 'success'
                });

                this.index();

            })
        },
    }
}
</script>