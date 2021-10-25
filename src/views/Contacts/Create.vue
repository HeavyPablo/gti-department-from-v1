<template>
    <div>
    <modal id="dlgNewContacts" title="Contactos Servicio de transporte">
        <template v-slot:body>
                <div class="row">
                        <div class="form-group col-sm-12">
                            <label class="form-label">full name</label>
                            <input type="text" class="form-control" v-model="create.full_name"/>
                        </div>

                        <div class="form-group col-sm-12">
<<<<<<< HEAD
                            <label class="form-label">TelÃ©fono</label>
=======
                            <label class="form-label">phone number</label>
>>>>>>> parent of e745cb2 (Contacts)
                            <input type="text" class="form-control" v-model="create.phone_number"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Email</label>
                            <input type="text" class="form-control" v-model="create.email"/>
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
import Contacts from '../../services/Contacts'
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

            await Contacts.store(this.create, () => {
                this.$toast.open({
                    message: 'Contacto creado!',
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