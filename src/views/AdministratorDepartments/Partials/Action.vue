<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    Acciones
                </div>
                <div class="card-body">
                    <div class="btn-group-vertical w-100">
                        <button v-if="is_inactive || is_in_maintenance" class="btn btn-primary btn-sm-block" @click="storeActive">Habilitar</button>
                        <button v-if="is_active" class="btn btn-danger btn-sm-block" @click="storeInactive">Inhabilitar</button>
                        <button v-if="!is_in_maintenance" class="btn btn-warning btn-sm-block" @click="storeMaintenance">Iniciar mantención</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DepartmentMaintenance from "@/services/DepartmentMaintenance";
import DepartmentActive from "@/services/DepartmentActive";
import DepartmentInactive from "@/services/DepartmentInactive";

export default {
    data() {
        return {
            errors: {}
        }
    },

    props: ['department'],

    computed: {
        is_in_maintenance() {
            return this.department.status === 'IN_MAINTENANCE';
        },

        is_active() {
            return this.department.status === 'ACTIVE';
        },

        is_inactive() {
            return this.department.status === 'INACTIVE';
        }
    },

    methods: {
        async storeMaintenance() {
            this.$toast.open({
                message: 'Actualizando...',
                type: 'info'
            });

            const create = {
                maintenance: !this.is_in_maintenance
            }

            await DepartmentMaintenance.update(this.department.id, create, () => {
                this.$toast.clear();

                this.$toast.open({
                    message: 'Departamento actualizado!',
                    type: 'success'
                });

                this.$emit('updated');

            }, errors => {
                this.errors = errors;
            })
        },

        async storeActive() {
            this.$toast.open({
                message: 'Actualizando...',
                type: 'info'
            });

            const create = {
                active: !this.is_active
            }

            await DepartmentActive.update(this.department.id, create, () => {
                this.$toast.clear();

                this.$toast.open({
                    message: 'Departamento actualizado!',
                    type: 'success'
                });

                this.$emit('updated');

            }, errors => {
                this.errors = errors;
            })
        },

        async storeInactive() {
            this.$toast.open({
                message: 'Actualizando...',
                type: 'info'
            });

            const create = {
                inactive: !this.is_inactive
            }

            await DepartmentInactive.update(this.department.id, create, () => {
                this.$toast.clear();

                this.$toast.open({
                    message: 'Departamento actualizado!',
                    type: 'success'
                });

                this.$emit('updated');

            }, errors => {
                this.errors = errors;
            })
        }
    }
}
</script>