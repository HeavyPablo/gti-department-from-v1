<template>
    <div>

        <div class="card">
            <div class="card-body border-bottom">
                <h4 class="card-title">Departamento disponible</h4>


            </div>
        </div>

        <div v-for="department in department" :key="department.id" class="card width-300">
            <!-- Start - Cambiar por imagen del departamento -->
            <svg class="bd-placeholder-img card-img-top text-center" width="100%" height="180"
                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
                 preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
            </svg> <!-- End - Cambiar por imagen del departamento  -->

            <div class="card-body">
                <h5 class="card-title w-100 d-flex">
                    <span class="flex-fill">{{ department.address }}</span>
                    ${{ department.value }}
                </h5>
                <p class="card-text">{{ department.description }}</p>

                <div class="text-primary my-1">
                    <vue-feather class="me-1" v-if="hasEquipment(department, 'WIFI')" type="wifi"></vue-feather>
                    <vue-feather class="me-1" v-if="hasEquipment(department, 'AIRE ACONDICIONADO')" type="wind"></vue-feather>
                    <vue-feather class="me-1" v-if="hasEquipment(department, 'TELEVISORES')" type="tv"></vue-feather>
                    <vue-feather class="me-1" v-if="hasEquipment(department, 'TV CABLE')" type="radio"></vue-feather>
                </div>

                <div class="text-secondary mb-2">
                    <small v-for="equipment in department.equipments" :key="equipment.id" class="badge badge-light-success me-1 mb-1">
                        {{ equipment.name }}
                    </small>
                </div>


                <a :href="'/client/departments/' + department.id" class="float-end">Ver departamento <vue-feather type="arrow-right" class="ms-1" size="16px"></vue-feather></a>
            </div>
        </div>
    </div>
</template>

<script>
import Department from '../../services/Department'
import {Modal} from 'bootstrap'

export default {

    data() {
        return {
            department: [],
            edit: {},
            errors: {},
            params: {}
        }
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await Department.get({}, data => {
                this.department = data;
            });
        },

        async update() {
            this.$toast.clear();
            await Department.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de equipamiento actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditDepartment')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();

                this.index();
            }, errors => {
                this.errors = errors
            })
        },

        show(element) {
            this.edit = {...element}
        },

        async destroy(element) {
            this.$toast.clear();
            await Department.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de equipamiento eliminado!',
                    type: 'success'
                });

                this.index();
            })
        },

        hasEquipment(department, equipment) {
            let result = false;
            department.equipments.forEach(element => {
                if (element.name === equipment) {
                    result = true;
                }
            })
            return result;
        }
    }
}
</script>