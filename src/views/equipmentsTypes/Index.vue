<template>
    <div>

        <div class="card">
            <div class="card-body border-bottom">
                <h4 class="card-title">Tipos de equipamientos</h4>

                <div class="row">
                    <button type="button" class="btn btn-primary"><vue-feather type="plus" size="1.5rem"></vue-feather> Agregar</button>
                </div>
            </div>
            <div class="card-datatable table-responsive pt-0">
                <table class="user-list-table table">
                    <thead class="table-ligth">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="equipment_type in equipments_types" :key="equipment_type.id">
                            <th scope="row">{{ equipment_type.id }}</th>
                            <td>{{ equipment_type.name }}</td>
                            <td>
                                <div class="d-flex">
                                    <buttton type="button" class="btn btn-primary"></buttton>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <create></create>
    </div>
</template>

<script>
import Create from './Create'

import EquipmentType from '../../services/EquipmentType'

export default {
    components: { Create },

    data() {
        return {
            equipments_types: [],
            error: {}
        }
    },

    created() {
        this.index();
    },

    methods: {
        index() {
            EquipmentType.get({}, data => {
                this.equipments_types = data;
            });
        }
    }
}
</script>