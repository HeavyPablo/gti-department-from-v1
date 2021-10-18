<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Registrar incidencias</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewIncidence">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="incidenceTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Valor</th>
                        <th>Origen</th>
                        <th>Descripción</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(incidence, index) in incidences" :key="index">
                            <td class="align-middle">{{ incidence.id }}</td>
                            <td class="align-middle">{{ incidence.name }}</td>
                            <td class="align-middle">{{ incidence.value }}</td>
                            <td class="align-middle">{{ incidence.origin }}</td>
                            <td class="align-middle">{{ incidence.description }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditIncidence" 
                                    @click="show(incidence)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(incidence.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <incidence-create @stored="index"></incidence-create>


        <modal id="dlgEditIncidence" title="Editar incidencia">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" v-model="edit.name"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Valor</label>
                        <input type="text" class="form-control" v-model="edit.value"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Origen</label>
                        <input type="text" class="form-control" v-model="edit.origin"/>
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
import Incidence from '../../services/Incidences';
import IncidenceCreate from './Create';
import { Modal } from 'bootstrap';

const $ = require('jquery');

export default {
    components: { IncidenceCreate },

    data() {
        return {
            incidences: [],
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

            $('#incidenceTable').DataTable().destroy();

            await Incidence.get({}, data => {
                this.incidences = data;

                this.$nextTick(() => {
                    $('#incidenceTable').DataTable(config);
                });
            });
        },

        async update() {
            this.$toast.clear();
            await Incidence.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Incidencia actualizada!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditIncidence')
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
            await Incidence.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Incidencia eliminada!',
                    type: 'success'
                });

                this.index();
            })
        },
    }

}
</script>