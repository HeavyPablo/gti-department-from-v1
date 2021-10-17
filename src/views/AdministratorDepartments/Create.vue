<template>
    <div>
        <modal id="dlgNewDepartment" title="Crear nuevo departamento">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12 mb-1">
                        <label class="form-label">Dirección</label>
                        <input type="text" class="form-control" v-model="create.address"/>
                    </div>

                    <div class="form-group col-sm-12 mb-1">
                        <label class="form-label">Capacidad: <span class="text-gray-600">{{ create.capacity }}</span></label>
                        <input type="range" class="form-range" min="0" max="10" v-model="create.capacity"/>
                    </div>

                    <div class="form-group col-sm-12 mb-1">
                        <label class="form-label">Dormitorios <span class="text-gray-600">{{ create.bedroom }}</span></label>
                        <input type="range" class="form-range" min="0" max="10" v-model="create.bedroom"/>
                    </div>

                    <div class="form-group col-sm-12 mb-1">
                        <label class="form-label">Baños <span class="text-gray-600">{{ create.bathroom }}</span></label>
                        <input type="range" class="form-range" min="0" max="10" v-model="create.bathroom"/>
                    </div>

                    <div class="form-group col-sm-12 mb-1">
                        <label class="form-label">Valor</label>
                        <input type="number" class="form-control" v-model="create.value"/>
                    </div>

                    <div class="form-group col-sm-12 mb-1">
                        <label class="form-label">Descripción</label>
                        <textarea class="form-control" rows="3" v-model="create.description"></textarea>
                    </div>
                </div>
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