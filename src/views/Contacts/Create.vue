<template>
    <div>
    <modal id="dlgNewContacts" title="Contactos Servicio de transporte">
        



    </modal>
    </div>
</template>

<script>
import { Contacts}  from '../../services/Contacts '
import { Modal } from 'bootstrap'

export default {
    data(){ 
        return {
            Create: {},
            error: {}

        }
        
    },
   
   methods: {
        async store() {
            this.$toast.clear();

            await Contacts.store(this.create, () => {
                this.$toast.open({
                    message: 'Tipo de equipamiento creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewContacts')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
   



}


</script>
