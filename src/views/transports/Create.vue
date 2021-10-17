<template>
    <div>
        <modal id="dlgNewTransport" title="Crear nuevo transporte">
            <template v-slot:body>
                <div class="row">

                        <div class="form-group col-sm-12">
                            <label class="form-label">Vehículo</label>
                            <input type="text" class="form-control" v-model="create.vehicle"/>
                        </div>

                         <div class="form-group col-sm-12">
                            <label class="form-label">Patente</label>
                            <input type="text" class="form-control" v-model="create.patent"/>
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
import Transport from '../../services/Transports'
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

            await Transport.store(this.create, () => {
                this.$toast.open({
                    message: 'Tipo de transporte creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewTransport')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
}
</script>