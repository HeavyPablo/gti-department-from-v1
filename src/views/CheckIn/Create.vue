<template>
    <div>
        <modal id="dlgNewCheckIn" title="Crear nuevo Check In">
            <template v-slot:body>
                <div class="row">
                      

                         
                        
                    </div>
            </template>

            <template v-slot:btnSuccess>
                <button type="button" class="btn btn-primary" @click="store">Guardar</button>
            </template>
        </modal>
    </div>
</template>

<script>
import CheckIn from '../../services/CheckIn'
import { Modal } from 'bootstrap'



export default {
    data() {
        return {
            create: {},
            errors: {},
        
        }
    },


    methods: {
        async store() {
            this.$toast.clear();

            await CheckIn.store(this.create, () => {
                this.$toast.open({
                    message: 'Check In creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewCheckIn')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        },
        
        

    }
    
}
</script>