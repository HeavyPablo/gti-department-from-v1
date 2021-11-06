<template>
    <div>
        <modal id="dlgNewContact" title="Contactos Servicio de transporte">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre completo</label>
                        <input type="text" class="form-control" v-model="create.full_name"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Teléfono</label>
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
import Contact from '../../services/Contacts'
import {Modal} from 'bootstrap'


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