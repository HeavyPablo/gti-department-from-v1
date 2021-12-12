<template>
    <div>
        <modal id="dlgReserve" title="Arrendar departament">
            <template v-slot:body>
                <div class="row">
                    <div class="col-md-7">
                        <div class="form-group col-sm-12">
                            <label class="form-label">Ingrese período de estadía</label>
                            <flat-pickr class="form-control flatpickr-range" language="es" :config="config" v-model="create.date"></flat-pickr>
                        </div>

                        <div class="col-15 col-sm-15 mt-1">
                            <label class="form-label">Personas: <span
                                class="text-gray-600">{{ create.total_tenants }}</span></label>
                            <input type="range" class="form-range" min="0" :max="department.capacity"
                                   v-model="create.total_tenants"/>
                        </div>

                        <div class="form-group col-sm-12 mt-1">
                            <label class="form-label">Descripción</label>
                            <input type="text" class="form-control" v-model="create.description"/>
                        </div>

                        <div class="form-check mt-1">
                            <input class="form-check-input" type="checkbox" id="reserve_check_conditions" value="" v-model="create.check_conditions">
                            <label class="form-check-label" for="reserve_check_conditions"> Acepto Términos y Condiciones </label>
                        </div>
                    </div>

                    <div class="col-md-5">


                        <label class="col-12 fs-5 text-end">
                            Valor Día: <span class="text-primary">{{getDiffDays && getDiffDays.diff > 0 ? getValueFormat(department.value) : '$0' }}</span>
                        </label>

                        <label class="col-12 mb-1 fs-5 text-end border-bottom">
                            Valor Total {{ getDiffDays.diff }} días: <span class="text-primary">{{ getDiffDays && getDiffDays.diff > 0 ? getValueFormat(department.value, true) : '$0' }}</span>
                        </label>

                        <label class="col-12 mb-1 fs-3 text-end">
                            Valor Reserva 19%: <span class="text-primary">{{ getDiffDays && getDiffDays.diff > 0 ? getValueFormat(department.value, true, 19) : '$0' }}</span>
                        </label>

                        <div class="text-center">
                            <div class="form-group col-sm-12 border-bottom mb-1">
                                <label class="form-label">Método de pago</label>
                            </div>

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
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:btnSuccess>
                <button type="button" class="btn btn-primary" @click="store">Pagar reserva</button>
            </template>
        </modal>
    </div>
</template>

<script>
import DepartmentSend from "../../../../services/DepartmentSend";
import {Modal} from "bootstrap";
import moment from "moment";

export default {
    data() {
        return {
            create: {
                rate: 0.19,
            },
            errors: {},
            config: {
                mode: 'range',
            }
        }
    },

    props: ['department'],

    computed: {
        getDiffDays() {
            let element = {};
            if (this.create.date && this.create.date.length > 0) {
                const separate = this.create.date.split(' to ');
                if (separate.length > 1) {
                    const start_date = moment(separate[0], 'YYYY-MM-DD');
                    const end_date = moment(separate[1], 'YYYY-MM-DD');

                    const diff = end_date.diff(start_date, 'days') + 1;

                    element = {
                        start_date: start_date,
                        end_date: end_date,
                        diff: diff
                    }
                }
            }
            console.log(element);
            return element;
        }
    },

    watch: {
        department() {
            const disabled = [];

            if (this.department.rents && this.department.rents.length > 0) {
                this.department.rents.forEach(rent => {
                    if (rent.start_date && rent.end_date) {
                        disabled.push({
                            from: moment(rent.start_date).format('YYYY-MM-DD'),
                            to: moment(rent.end_date).format('YYYY-MM-DD')
                        });
                    }
                })

                this.config.disable = disabled;
            }
        }
    },

    methods: {
        async store() {
            this.$toast.clear();

            this.create.use_conditions = this.create.check_conditions ? 'ACEPTADO' : 'NO ACEPTADO';
            this.create.departments_id = this.department.id;
            this.create.value = (this.create.rate * 100) + this.department.value;
            this.create.username = localStorage.getItem('username');
            this.create.start_date = this.getDiffDays.start_date;
            this.create.end_date = this.getDiffDays.end_date;
            this.create.diff = this.getDiffDays.diff;
            this.create.total_reserved = this.getValueFormat(this.department.value, true, 19, false);

            await DepartmentSend.store(this.create, () => {
                this.$toast.open({
                    message: 'Departamento reservador!',
                    type: 'success'
                });

                this.create= { rate: 0.19 };

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgReserve')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();

                window.location.href = '/departments/reserve';
            }, errors => {
                this.errors = errors
            })
        },

        getValueFormat(value, is_total = false, percentage = 0, formatted = true) {
            const formatter = new Intl.NumberFormat('en-CL', {
                style: 'currency',
                currency: 'CLP',
            });

            let value_format = value;
            const days = this.getDiffDays;
            if (is_total && days.diff && days.diff > 0) {
                value_format = value * days.diff;
            }

            if (percentage > 0) {
                value_format = value_format * (percentage / 100);
            }

            if (formatted) {
                return formatter.format(value_format);
            }

            return value_format;
        }
    }
}
</script>