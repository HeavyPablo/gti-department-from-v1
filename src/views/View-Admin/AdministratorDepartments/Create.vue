<template>
    <div>
        <modal id="dlgNewDepartment" title="Crear nuevo departamento">
            <template v-slot:body>
                <form class="needs-validation" novalidate>
                    <div class="row">
                        <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                            <div class="row py-3 shadow-5">
                                <div id="preview" class="col-sm-3 mb-1">
                                    <div class="mb-3">
                                        <input class="form-control" type="file" multiple @change="pickFile">
                                    </div>

                                    <viewer-files :files="files"></viewer-files>
                                </div>

                                <div class="col-sm-9">
                                    <div class="row">


                                        <div class="col-8 col-sm-6">
                                            <label class="form-label">Dirección</label>
                                            <input type="text" class="form-control" v-model="create.address"/>
                                        </div>
                                        <div class="col-4 col-sm-6 ">
                                            <label class="form-label">Valor</label>
                                            <input type="number" class="form-control" v-model="create.value"/>
                                        </div>

                                        <div class="col-15 col-sm-15 mt-1">
                                            <label class="form-label">Capacidad: <span
                                                class="text-gray-600">{{ create.capacity }}</span></label>
                                            <input type="range" class="form-range" min="0" max="10"
                                                   v-model="create.capacity"/>
                                        </div>

                                        <div class="col-15 col-sm-15 mt-1">
                                            <label class="form-label">Dormitorios <span
                                                class="text-gray-600">{{ create.bedroom }}</span></label>
                                            <input type="range" class="form-range" min="0" max="10"
                                                   v-model="create.bedroom"/>
                                        </div>

                                        <div class="col-15 col-sm-15 mt-1">
                                            <label class="form-label">Baños <span
                                                class="text-gray-600">{{ create.bathroom }}</span></label>
                                            <input type="range" class="form-range" min="0" max="10"
                                                   v-model="create.bathroom"/>
                                        </div>

                                        <div class="col-15 col-sm-15 mt-1">
                                            <label class="form-label">Descripción</label>
                                            <textarea class="form-control" rows="3"
                                                      v-model="create.description"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </template>
            <template v-slot:btnSuccess>
                <button type="button" class="btn btn-primary" @click="store">Guardar</button>
            </template>
        </modal>
    </div>
</template>

<script>
import {Modal} from 'bootstrap'
import SearchDepartment from '../../../services/SearchDepartment'

export default {
    data() {
        return {
            create: {},
            errors: {},
            previewImage: null,
            files: []
        }
    },

    methods: {
        async store() {
            this.$toast.clear();

            this.create.files = [];
            this.files.forEach(file => {
                this.create.files.push(file.file_base64);
            });

            await SearchDepartment.store(this.create, () => {
                this.$toast.open({
                    message: 'Departamente creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewDepartment')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        },

        async pickFile(input) {
            this.files = [];
            for (const file of Array.from(input.target.files)) {
                const reader = await this.getBase64(file);

                const element = {file_base64: reader}
                this.files.push(element);
            }
        },

        async getBase64(file) {
            return new Promise((resolve) => {
                const reader = new FileReader();

                reader.onloadend = function () {
                    resolve(reader.result);
                }

                reader.readAsDataURL(file);
            });
        }
    },
}
</script>




