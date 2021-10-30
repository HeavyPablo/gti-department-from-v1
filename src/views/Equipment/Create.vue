<template>
    <div>
        <modal id="dlgNewEquipment" title="Crear nuevo equipamiento">
            <template v-slot:body>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" v-model="create.name"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Descripción</label>
                        <input type="text" class="form-control" v-model="create.description"/>
                    </div>

                    <div class="form-group col-sm-12">
                        <label class="form-label">Tipo de equipamiento</label>
                        <select class="form-select" v-model="create.equipments_types_id">
                            <option v-for="equipment_type in equipmentsTypes" :key="equipment_type.id" :value="equipment_type.id">{{ equipment_type.name }}</option>
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
import { Modal } from 'bootstrap'
import Equipment from "@/services/Equipment";


export default {
    data() {
        return {
            create: {},
            errors: {},

        }
    },

    props: ['equipmentsTypes'],

    methods: {
        async store() {
            this.$toast.clear();

            await Equipment.store(this.create, () => {
                this.$toast.open({
                    message: 'Tipo de equipamiento creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewEquipment')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
}
</script>