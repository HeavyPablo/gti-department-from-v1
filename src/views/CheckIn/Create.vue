<template>
    <div>
        <modal id="dlgNewRegistration" title="Crear nuevo Check In">
            <template v-slot:body>
                <div class="row">
                      
                    <div class="col-8 col-sm-6">

                        <div class="form-group col-sm-12">
                            <label class="form-label">Condicion</label>
                            <input type="text" class="form-control" v-model="create.condition"/>
                        </div>  

                        <div class="form-group col-sm-12">
                            <label class="form-label">Firma</label>
                            <input type="text" class="form-control" v-model="create.signature"/>
                        </div>       

                        <div class="col-15 col-sm-15 mt-1">
                            <label class="form-label">Descripción</label>
                            <textarea class="form-control" rows="3"
                            v-model="create.description"></textarea>
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
            
            this.create.rents_id=this.rents_id;

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