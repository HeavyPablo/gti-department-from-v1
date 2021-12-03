<template>
    <div>
        <modal id="dlgNewRegistration" title="Crear nuevo Check In">
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

                         <div class="form-group col-sm-12">
                            <label class="form-label">Tipo de Registro</label>
                            <select class="form-control" v-model="create.registrations_types_id">
                                <option v-for="registration_type in registration_type" :key="registration_type.id" :value="registration_type.id">{{registration_type.name}}</option>
                            </select>
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

    props:['registration_type'],

    methods: {
        async store() {
            this.$toast.clear();

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