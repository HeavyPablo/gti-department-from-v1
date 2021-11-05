<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-lg-9 col-md-8 col-12">
                <div class="card">
                    <div class="card-body invoice-padding pb-0">
                        <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                            <div class="flex-fill">
                                <div class="card-title">
                                    Departamento
                                </div>
                                <div class="pe-3">
                                    <label class="label border-bottom w-100 mb-1">Estado</label>
                                    <span class="badge" :class="is_active ? 'badge-light-success' : is_in_maintenance ? 'badge-light-warning' : 'badge-light-danger'">
                                        {{ is_active ? 'ACTIVO' : is_in_maintenance ? 'EN MANTENCIÓN' : 'INACTIVO' }}
                                    </span>
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
                    <component-equipment :department="department" @updated="index(department.id)"></component-equipment> <!-- End Equipamiento -->
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12">
                <component-action :department="department"  @updated="index(department.id)"></component-action>
            </div>
        </div>
    </div>
</template>

<script>
import Department from '../../services/Department';

import ComponentAction from "@/views/AdministratorDepartments/Partials/Action";
import ComponentEquipment from "@/views/AdministratorDepartments/Partials/Equipment";

export default {
    components: { ComponentAction, ComponentEquipment },

    data() {
        return {
            department: {},
        }
    },

    computed: {
        is_active() {
            return this.department.status === 'ACTIVE';
        },

        is_inactive() {
            return this.department.status === 'INACTIVE';
        },

        is_in_maintenance() {
            return this.department.status === 'IN_MAINTENANCE';
        }
    },

    created() {
        this.index(this.$route.params.id);
    },

    methods: {
        async index(id) {
            await Department.show(id, data => {
                this.department = data;
            })
        },
    }
}
</script>