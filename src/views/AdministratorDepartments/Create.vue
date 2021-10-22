<template>
    <div>
        <modal id="dlgNewDepartment" title="Crear nuevo departamento">
            <template v-slot:body>
                <form>
                    <div class="row">
                        <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                            <div class="row py-3 shadow-5">
                                <div class="col-sm-3 mb-1">
                                        <div class="lightbox">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                                 alt="Gallery image 1"
                                                 class="ecommerce-gallery-main-img active w-100"
                                            />
                                        </div>
                                        <div class="row">
                                            <div class="col-4 mt-1">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    alt="Gallery image 2"
                                                    class="w-100"
                                                />
                                            </div>
                                             <div class="col-4 mt-1">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    alt="Gallery image 2"
                                                    class="w-100"
                                                />
                                            </div>
                                            <div class="col-4 mt-1">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    alt="Gallery image 2"
                                                    class="w-100"
                                                />
                                            </div>


                                         </div>
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
                                          <label class="form-label">Capacidad: <span class="text-gray-600">{{ create.capacity }}</span></label>
                                          <input type="range" class="form-range" min="0" max="10" v-model="create.capacity"/>
                                        </div>

                                        <div class="col-15 col-sm-15 mt-1">
                                            <label class="form-label">Dormitorios <span class="text-gray-600">{{ create.bedroom }}</span></label>
                                            <input type="range" class="form-range" min="0" max="10" v-model="create.bedroom"/>
                                        </div>

                                        <div class="col-15 col-sm-15 mt-1">
                                            <label class="form-label">Baños <span class="text-gray-600">{{ create.bathroom }}</span></label>
                                            <input type="range" class="form-range" min="0" max="10" v-model="create.bathroom"/>
                                        </div>

                                        <div class="col-15 col-sm-15 mt-1">
                                             <label class="form-label">Descripción</label>
                                             <textarea class="form-control" rows="3" v-model="create.description"></textarea>
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
import { Modal } from 'bootstrap'
import Department from '../../services/Department'


export default {
    data() {
        return {
            create: {},
            errors: {}
        }
    },

    methods: {
        async store() {
            this.$toast.clear();

            await Department.store(this.create, () => {
                this.$toast.open({
                    message: 'Tipo de equipamiento creado!',
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
        }
    }
}
</script>