<template>
    <div>
        <div class="card-header">
            <div>
                <h4 class="card-title">Equipamiento</h4>
                <p class="text-muted">Seleccione para editar.</p>
            </div>

            <button v-if="edit" class="btn btn-warning" @click="store">Guardar Cambios
            </button>
        </div>

        <div class="card-body">
            <div v-for="equipment in equipments" :key="equipment.id"
                 class="rounded-pill btn-flat-secondary shadow mt-3" @click="checkEquipment(equipment.id)"
                 style="cursor: pointer">
                <div class="px-5 py-2 d-flex justify-content-center align-items-center">
                    <div class="flex-fill">
                        <div class="fs-4">
                            {{ equipment.name }} <span class="badge bg-light-primary ms-1 ">{{
                                equipment.equipmentType ? equipment.equipmentType.name : ''
                            }}</span>
                        </div>
                        <hr/>
                        <div class="fs-5 text-muted">
                            {{ equipment.description }}
                        </div>
                    </div>

                    <div class="mx-3">
                        <input type="checkbox" class="form-check-input" :value="equipment.id"
                               v-model="create"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import EquipmentType from "@/services/EquipmentType";
import Equipment from "@/services/Equipment";
import DepartmentEquipment from "@/services/DepartmentEquipment";

export default {
    data() {
        return {
            create: [],
            edit: false,
            equipments_types: [],
            equipments: [],
            errors: {}
        }
    },

    props: ['department'],

    watch: {
        department() {
            this.create = [];
            if (this.department.equipments) {
                this.department.equipments.forEach(element => {
                    this.create.push(element.id);
                })
            }
        }
    },

    created() {
        this.loadData();
    },

    methods: {
        async loadData() {
            await EquipmentType.get({}, data => {
                this.equipments_types = data;
            });

            await Equipment.get({}, data => {
                this.equipments = data;
            });
        },

        checkEquipment(equipmentId) {
            let exist = false;
            let index = -1;

            this.edit = true;

            this.create.forEach((value, i) => {
                if (value === equipmentId) {
                    index = i;
                    exist = true;
                }
            })

            if (exist && index > -1) {
                this.create.splice(index, 1);
            } else {
                this.create.push(equipmentId);
            }
        },

        async store() {
            this.$toast.open({
                message: 'Actualizando...',
                type: 'info'
            });

            const create = {
                equipments: this.create
            }

            await DepartmentEquipment.update(this.department.id, create, () => {
                this.$toast.clear();

                this.edit = false;

                this.$toast.open({
                    message: 'Departamento actualizado!',
                    type: 'success'
                });

                this.$emit('updated');
            }, errors => {
                this.errors = errors
            });
        }
    }
}
</script>