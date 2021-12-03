<template>
    <div>
        <modal id="dlgNewAdmUser" title="Crear">
            <template v-slot:body>
                <div class="row">
                        <div class="form-group col-sm-12">
                            <label class="form-label">Nombre Usuario</label>
                            <input type="text" class="form-control" v-model="create.username"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Contraseña</label>
                            <input type="password" class="form-control" v-model="create.password"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Estado</label>
                            <input type="text" class="form-control" v-model="create.status"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" v-model="create.name"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Apellido</label>
                            <input type="text" class="form-control" v-model="create.last_name"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Dirección</label>
                            <input type="text" class="form-control" v-model="create.address"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Correo</label>
                            <input type="text" class="form-control" v-model="create.email"/>
                        </div>

                        <div class="form-group col-sm-12">
                            <label class="form-label">Teléfono</label>
                            <input type="text" class="form-control" v-model="create.phone_number"/>
                        </div>

                        <div class="form-group col-sm-12">
                        <label class="form-label">Rol</label>
                        <select class="form-control" v-model="create.roles_id">
                            <option v-for="role in role" :key="role.id" :value="role.id">{{role.name}}</option>
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
import AdmUser from '../../../services/AdministradorUsers'
import { Modal } from 'bootstrap'


export default {
    data() {
        return {
            create: {},
            errors: {}
        }
    },

     props:['role'],

    methods: {
        async store() {
            this.$toast.clear();

            await AdmUser.store(this.create, () => {
                this.$toast.open({
                    message: 'creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewAdmUser')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
}
</script>