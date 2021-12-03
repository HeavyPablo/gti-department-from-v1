<template>
    <div>
        <modal id="dlgNewCheckOut" title="Crear nuevo Check Out">
            <template v-slot:body>
                <div class="row">
                        <div class="form-group col-sm-12">
                            <label class="form-label">Condicion</label>
                            <input type="text" class="form-control" v-model="create.condition"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Firma</label>
                            <input type="text" class="form-control" v-model="create.signature"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Descripcion</label>
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
import CheckOut from '../../services/CheckOut'
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

            await CheckOut.store(this.create, () => {
                this.$toast.open({
                    message: 'Check Out creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewCheckOut')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        },

    }
}
</script>