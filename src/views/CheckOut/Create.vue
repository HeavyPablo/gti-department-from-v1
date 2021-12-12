<template>
    <div>
        <modal id="dlgNewCheckOut" title="Registro de incidencias y check out">
            <template v-slot:body>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="d-flex justify-content-center align-items-end border-bottom">
                            <div class="flex-fill mb-1">Registro de incidencias</div>
                            <button class="btn btn-sm my-1 btn-warning" @click="addIncidence">Nueva incidencia</button>
                        </div>

                        <div class="mt-2">
                            <div v-for="(incidence, index) in incidences" :key="index" class="border-bottom mb-1">
                                <div class="d-flex justify-content-end mb-1">
                                    <a class="d-flex align-items-center text-danger" @click="removeIncidence(index)"><vue-feather type="trash" size="16px" class="mx-25"></vue-feather>Quitar</a>
                                </div>
                                <div class="row mb-1">
                                    <div class="col-sm-8">
                                        <div class="input-group">
                                            <span class="input-group-text bg-light-secondary">Nombre</span>
                                            <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" v-model="incidence.name">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="input-group">
                                            <span class="input-group-text bg-light-secondary">$</span>
                                            <input type="number" class="form-control" placeholder="50000" aria-label="50000" v-model="incidence.value">
                                        </div>
                                    </div>

                                </div>
                                <div class="row mb-1">
                                    <div class="col-md-4">
                                        <div class="input-group me-1">
                                            <span class="input-group-text bg-light-secondary">Origen</span>
                                            <select class="form-select" v-model="incidence.origin">
                                                <option value="INTERIOR">Interior</option>
                                                <option value="EXTERIOR">Exterior</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-8">
                                        <div class="input-group">
                                            <span class="input-group-text bg-light-secondary">Descripción</span>
                                            <input type="text" class="form-control" placeholder="Descripción" aria-label="Descripción" v-model="incidence.description">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <label class="col-12 mb-1 fs-4 text-end">
                            Valor total de incidencias: <span class="text-primary">{{ getValue.format }}</span>
                        </label>

                        <div class="d-flex justify-content-around">
                            <div class="form-check form-check-inline form-check-primary">
                                <input class="form-check-input" type="radio" id="reserve_check_debit" value="DEBITO" v-model="create.method">
                                <label class="form-check-label justify-content-center align-items-center d-flex" for="reserve_check_debit">
                                    <vue-feather type="credit-card" class="text-primary mx-25"></vue-feather> Debito
                                </label>
                            </div>
                            <div class="form-check form-check-inline form-check-warning">
                                <input class="form-check-input" type="radio" id="reserve_check_credit" value="CREDITO" v-model="create.method">
                                <label class="form-check-label justify-content-center align-items-center d-flex" for="reserve_check_credit">
                                    <vue-feather type="credit-card" class="text-warning mx-25"></vue-feather> Crédito
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Observaciones</label>
                            <textarea class="form-control" v-model="create.description"/>
                        </div>
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
import CheckOut from '../../services/CheckOut'
import { Modal } from 'bootstrap'

export default {
    data() {
        return {
            create: {},
            errors: {},
            incidences: [
                {name: '', value: '', origin: '', description: ''}
            ]
        }
    },

    props: ['rents_id'],

    computed: {
        getValue() {
            const formatter = new Intl.NumberFormat('en-CL', {
                style: 'currency',
                currency: 'CLP',
            });

            const element = {};
            let value = 0;

            if (this.incidences.length > 0) {
                this.incidences.forEach(incidence => {
                    value += incidence.value;
                });
            }

            element.value = value;
            element.format = formatter.format(value);

            return element;
        }
    },

    methods: {
        async store() {
            this.$toast.clear();

            this.create.incidences = this.incidences;
            this.create.condition = "S/C";
            this.create.totalValue = this.getValue.value;
            this.create.username = localStorage.getItem('username');
            this.create.rent_id = this.rents_id;

            await CheckOut.store(this.create, () => {
                this.$toast.open({
                    message: 'Check Out registrado!',
                    type: 'success'
                });

                this.create = {};
                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewCheckOut')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            });
        },

        addIncidence() {
            this.incidences.push({name: '', value: '', origin: '', description: ''});
        },

        removeIncidence(index) {
            this.incidences.splice(index, 1);
        },


    }
}
</script>