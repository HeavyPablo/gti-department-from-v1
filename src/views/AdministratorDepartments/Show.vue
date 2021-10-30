<template>
    <div>
        <div class="col-xl-9 col-md-8 col-12">
            <div class="card">
                <div class="card-body invoice-padding pb-0">
                    <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                        <div class="flex-fill">
                            <div class="card-header">
                                Departamento
                            </div>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                <tr>
                                    <td class="pe-1">Dirección:</td>
                                    <td>{{ department.address }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-1">Baños:</td>
                                    <td>{{ department.bathroom }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-1">Camas:</td>
                                    <td>{{ department.bedroom }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-1">Capacidad de personas:</td>
                                    <td>{{ department.capacity }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-1">Costo de compra:</td>
                                    <td><strong>${{ department.value }}</strong></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr/>

                <!-- Start Equipamiento -->
                <div class="card-header">
                    <div>
                        <h4 class="card-title">Equipamiento</h4>
                        <p class="text-muted">Seleccione para editar.</p>
                    </div>

                    <button v-if="edit_equipment" class="btn btn-warning" @click="storeEquipment">Guardar Cambios
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
                                       v-model="create_equipment"/>
                            </div>
                        </div>

                    </div>
                </div> <!-- End Equipamiento -->
            </div>
        </div>
    </div>
</template>

<script>
import Department from '../../services/Department';
import EquipmentType from "@/services/EquipmentType";
import Equipment from "@/services/Equipment";
import DepartmentEquipment from "@/services/DepartmentEquipment";

export default {
    data() {
        return {
            create_equipment: [],
            errors: {},
            department: {},
            equipments_types: [],
            equipments: [],
            edit_equipment: false
        }
    },

    created() {
        this.index(this.$route.params.id);
        this.loadData();
    },

    methods: {
        async index(id) {
            await Department.show(id, data => {
                this.department = data;

                if (data.equipments) {
                    data.equipments.forEach(element => {
                        this.create_equipment.push(element.id);
                    })
                }
            })
        },

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

            this.edit_equipment = true;

            this.create_equipment.forEach((value, i) => {
                if (value === equipmentId) {
                    index = i;
                    exist = true;
                }
            })

            if (exist && index > -1) {
                this.create_equipment.splice(index, 1);
            } else {
                this.create_equipment.push(equipmentId);
            }
        },

        async storeEquipment() {
            this.$toast.open({
                message: 'Actualizando...',
                type: 'info'
            });

            const create = {
                equipments: this.create_equipment
            }

            await DepartmentEquipment.update(this.department.id, create, () => {
                this.$toast.clear();

                this.edit_equipment = {};

                this.$toast.open({
                    message: 'Departamento actualizado!',
                    type: 'success'
                });
            }, errors => {
                this.errors = errors
            });
        }
    }
}
</script>