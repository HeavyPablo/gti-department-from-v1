<template>
  
    <div class="card">
        <div class="card-header">
            <div class="card-title">
            
            </div>
            <div class="card-body">
              <form class="form">
                    <div class="row"  v-for="searchdepartment in searchdepartments" :key="searchdepartment.id">
                        <div class="col-md-6 col-12">
                            <div id="preview" class="">
                                      
                                        
                                
                                </div>
                        </div>
                           <div class="col-md-6 col-12">
                               <span>Departamento en Arriendo</span>
                               <hr>
                              <div class="row">
                                <div class="col-md-8">
                                    <span>Titulo de departamento</span>
                                </div>
                                <br>
                                <br>
                                <div class="col-md-8">
                                    ${{searchdepartment.value}}
                                </div>
                              
                            </div>
                           
                        </div>
                        
                    </div>
              </form>
            </div>


        </div>
    </div>

       <div class="card" style="borde">
            <div class="card-header">
                <div class="col-md-6 col-12">
                    <div class="mb-1">
                        <h3>Descripcion</h3>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import SearchDepartment from '../../../services/SearchDepartment'
import {Modal} from 'bootstrap'

export default {

    data() {
        return {
            searchdepartments: [],
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
            this.params.status = 'ACTIVE';

            await SearchDepartment.get(this.params, data => {
                this.searchdepartments = data;
            });
        },

        async update() {
            this.$toast.clear();
            await SearchDepartment.update(this.edit.id, this.edit, () => {

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
            await SearchDepartment.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Tipo de equipamiento eliminado!',
                    type: 'success'
                });

                this.index();
            })
        },

        hasEquipment(SearchDepartment, equipment) {
            let result = false;
            SearchDepartment.equipments.forEach(element => {
                if (element.name === equipment) {
                    result = true;
                }
            })
            return result;
        },

        search() {
            this.index();
            this.$toast.clear();
            this.$toast.open({
                message: 'Filtros aplicados!',
                type: 'success'
            });
        },

        clear() {
            this.params = {};
            this.index();
            this.$toast.clear();
            this.$toast.open({
                message: 'Filtros reestablecidos!',
                type: 'success'
            });
        }
    }
}
</script>
