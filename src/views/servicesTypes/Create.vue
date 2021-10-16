<template>
    <div>
        <modal id="dlgNewServiceType" title="Crear nuevo tipo de servicio">
            <template v-slot:body>
                <div class="row">
                        <div class="form-group col-sm-12">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" v-model="create.name"/>
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
import ServiceType from '../../services/ServiceType'
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

            await ServiceType.store(this.create, () => {
                this.$toast.open({
                    message: 'Tipo de servicio creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewServiceType')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
}
</script>