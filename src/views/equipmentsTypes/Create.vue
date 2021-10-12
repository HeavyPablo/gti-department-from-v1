<template>
    <div>
        <modal id="dlgNewEquipmentType" title="Crear nuevo tipo de equipamiento">
            <template v-slot:body>
                <div class="row">
                        <div class="form-group col-sm-12">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" v-model="create.name"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Descripción</label>
                            <input type="text" class="form-control" v-model="create.description"/>
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
import EquipmentType from '../../services/EquipmentType'
import { Modal } from 'bootstrap'


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

            await EquipmentType.store(this.create, () => {
                this.$toast.open({
                    message: 'Tipo de equipamiento creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewEquipmentType')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
}
</script>