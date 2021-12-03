<template>
    <div>
        <modal id="dlgRent" title="Arrendar departament">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        Valor: <span class="text-primary">${{ department.value + (create.rate * 100) }}</span>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">
                            ${{ department.value }} + <span class="text-primary">{{ (create.rate * 100) }}%</span>
                        </label>
                    </div>

                    <div class="col-15 col-sm-15 mt-1">
                        <label class="form-label">Personas: <span
                            class="text-gray-600">{{ create.total_tenants }}</span></label>
                        <input type="range" class="form-range" min="0" :max="department.capacity"
                               v-model="create.total_tenants"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Descripción</label>
                        <input type="text" class="form-control" v-model="create.description"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Condiciones de uso</label>
                        <input type="checkbox" class="form-check" v-model="create.check_conditions"/>
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
import DepartmentSend from "../../../../services/DepartmentSend";
import {Modal} from "bootstrap";

export default {
    data() {
        return {
            create: {
                rate: 0.19,
            },
            errors: {}
        }
    },

    props: ['department'],

    methods: {
        async store() {
            this.$toast.clear();

            this.create.use_conditions = this.create.check_conditions ? 'ACEPTADO' : 'NO ACEPTADO';
            this.create.departments_id = this.department.id;
            this.create.value = (this.create.rate * 100) + this.department.value;
            this.create.username = localStorage.getItem('username');

            await DepartmentSend.store(this.create, () => {
                this.$toast.open({
                    message: 'Departamento arrendado!',
                    type: 'success'
                });

                this.create= { rate: 0.19 };

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgRent')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
}
</script>