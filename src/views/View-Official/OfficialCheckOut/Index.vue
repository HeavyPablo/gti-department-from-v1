<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Check Out</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dlgNewCheckOut">
                    <vue-feather type="plus" size="1rem"></vue-feather> Agregar
                </button>
            </div>

            <div class="card-body">
                <table id="checkoutTable" class="table">
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
                        <tr v-for="(checkout, index) in checkout" :key="index">
                            <td class="align-middle">{{ checkout.id }}</td>
                            <td class="align-middle">{{ checkout.condition }}</td>
                            <td class="align-middle">{{ checkout.signature }}</td>
                            <td class="align-middle">{{ checkout.description }}</td>
                            <td class="align-middle text-end">
                                <button type="button" class="btn btn-warning mx-2" 
                                    data-bs-toggle="modal" data-bs-target="#dlgEditCheckOut" 
                                    @click="show(checkout)">
                                    <vue-feather type="edit-2" size="14"></vue-feather>
                                </button>
                                <button type="button" class="btn btn-danger mx-2" @click="destroy(checkout.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <CheckOut-Create @stored="index"></CheckOut-Create>


        <modal id="dlgEditCheckOut" title="Editar Check Out">
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

import CheckOut from '../../services/CheckOut' ;
import CheckOutCreate from './Create';
import { Modal } from 'bootstrap';
//import jsPDF from 'jspdf';

const $ = require('jquery');

export default {
    components: { CheckOutCreate },

    data() {
        return {
            checkout: [],
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

            $('#checkoutTable').DataTable().destroy();

            await CheckOut.get({}, data => {
                this.checkout = data;

                this.$nextTick(() => {
                    $('#checkoutTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await CheckOut.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check Out actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditCheckOut')
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
            await CheckOut.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check Out Eliminado' ,
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