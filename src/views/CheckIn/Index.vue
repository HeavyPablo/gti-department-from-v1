<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Check In</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewCheckIn">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="checkinTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Condicion </th>
                        <th>Firma</th>
                        <th>Descripcion</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(checkin, index) in checkin" :key="index">
                            <td class="align-middle">{{ checkin.id }}</td>
                            <td class="align-middle">{{ checkin.condition }}</td>
                            <td class="align-middle">{{ checkin.signature }}</td>
                            <td class="align-middle">{{ checkin.description }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditCheckIn" 
                                    @click="show(checkin)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(checkin.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <CheckIn-Create @stored="index"></CheckIn-Create>


        <modal id="dlgEditCheckIn" title="Editar Check In">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Condiciones</label>
                        <input type="text" class="form-control" v-model="edit.condition"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Firma</label>
                        <input type="text" class="form-control" v-model="edit.signature"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Descripcion</label>
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

import CheckIn from '../../services/CheckIn' ;
import CheckInCreate from './Create';
import { Modal } from 'bootstrap';
//import jsPDF from 'jspdf';

const $ = require('jquery');

export default {
    components: { CheckInCreate },

    data() {
        return {
            checkin: [],
            edit: {},
            //errors: {},
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

            $('#checkinTable').DataTable().destroy();

            await CheckIn.get({}, data => {
                this.checkin = data;

                this.$nextTick(() => {
                    $('#checkinTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await CheckIn.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditCheckIn')
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
            await CheckIn.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In Eliminado' ,
                    type: 'success'
                });

                this.index();
                
            })
        },

        /*
        //metodo para crear pdf
        createPDF () {
        let pdfName = 'test'; 
        var doc = new jsPDF();
        doc.text("Hello World", 10, 10);
        doc.save(pdfName + '.pdf');
        },

        download() {
        const doc = new jsPDF();
        const contentHtml = this.$refs.content.innerHTML;
        doc.fromHTML(contentHtml, 15, 15, {
        width: 170
        });
        doc.save("sample.pdf");
        },

        downloadWithCSS() {
        const doc = new jsPDF();
        /** WITH CSS /
        var canvasElement = document.createElement('canvas');
            html2canvas(this.$refs.content, { canvas: canvasElement 
            }).then(function (canvas) {
            const img = canvas.toDataURL("image/jpeg", 0.8);
            doc.addImage(img,'JPEG',20,20);
            doc.save("sample.pdf");
        });
        },
        */
    }
}
</script>