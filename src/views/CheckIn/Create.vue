<template>
    <div>
        <modal id="dlgNewRegistration" title="Crear nuevo Check In">
            <template v-slot:body>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group col-sm-12">
                            <label class="form-label">Número de transacción</label>
                            <input type="number" class="form-control" v-model="create.condition"/>
                        </div>

                        <div class="col-15 col-sm-15 mt-1">
                            <label class="form-label">Observación</label>
                            <textarea class="form-control" v-model="create.description"/>
                        </div>
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
import Registration from '../../services/Registration'
import { Modal } from 'bootstrap'



export default {
    data() {
        return {
            create: {},
            errors: {},
        
        }
    },

    props:['rents_id'],

    methods: {
        async store() {
            this.$toast.clear();
            
            this.create.rent_id = this.rents_id;

            await Registration.store(this.create, () => {
                this.$toast.open({
                    message: 'Check In creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewRegistration')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        },
        
        

    }
    
}
</script>