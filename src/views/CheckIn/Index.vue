<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Reservas pendientes para realizar check in</h4>
               
            </div>

            <div class="card-body">
                <table id="checkinTable" class="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Departamento</th>
                        <th>Fecha de llegada</th>
                        <th>Fecha de salida</th>
                        <th>Valor reserva</th>
                        <th>Valor total</th>
                        <th>Valor pendiente</th>
                        <th>Cliente</th>
                        <th class="no-sort text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(checkin, index) in checkins" :key="index">
                            <td class="align-middle">{{ checkin.id }}</td>
                            <td class="align-middle">
                                <div v-if="checkin.departments">
                                    <div class="border-bottom">
                                        <span class="fw-bold">#{{ checkin.departments.id }}</span>
                                        {{ checkin.departments.address }}
                                    </div>
                                    <div class="font-small-3">
                                        {{ checkin.departments.description }}
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle">{{ dateFormat(checkin.start_date) }}</td>
                            <td class="align-middle">{{ dateFormat(checkin.end_date) }}</td>
                            <td class="align-middle">{{ getValueFormat(checkin).formated.reserved }}</td>
                            <td class="align-middle">{{ getValueFormat(checkin).formated.total }}</td>
                            <td class="align-middle fw-bold">{{ getValueFormat(checkin).formated.pending }}</td>
                            <td class="align-middle">{{ checkin.users_id }}</td>
                            <td class="align-middle text-end">
                                
                                <button type="button" class="btn btn-success mx-2" @click="show(checkin)"
                                data-bs-toggle="modal" data-bs-target="#dlgNewRegistration">
                                    <vue-feather type="check-circle" size="14"></vue-feather>
                                </button>

                                <button type="button" class="btn btn-danger mx-2" @click="destroy(checkin.id)">
                                    <vue-feather type="trash-2" size="14"></vue-feather>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>


        <RegistrationCreate :rents_id="edit.id" @stored="index"></RegistrationCreate>

       
    </div>
</template>

<script>

import CheckIn from '../../services/CheckIn';
import RegistrationCreate from './Create';
import {Modal} from 'bootstrap';
import moment from "moment";

const $ = require('jquery');

export default {
    components: { RegistrationCreate },

    data() {
        return {
            checkins: [],
            edit: {},
            errors: {}
           
        }
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            const config = {
                language: {
                    url: '/datatables/language/spanish_mexico.json'
                },
                columnDefs: [
                    { targets: 'no-sort', orderable: false},
                ]
            };

            $('#checkinTable').DataTable().destroy();

            const params = {
                status: 'RESERVED'
            }

            await CheckIn.get(params, data => {
                this.checkins = data;

                this.$nextTick(() => {
                    $('#checkinTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await CheckIn.update(this.edit.id, this.edit, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgEditCheckIn')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();

                this.index();
            }, errors => {
                this.errors = errors
            })
        },

        show(element) {
            this.edit = { ...element }
        },

        async destroy(element) {
            this.$toast.clear();
            await CheckIn.destroy(element, () => {

                this.edit = {};

                this.$toast.open({
                    message: 'Check In Eliminado' ,
                    type: 'success'
                });

                this.index();
                
            })
        },

        dateFormat(date) {
            return moment(date).format('YYYY-MM-DD');
        },

        getValueFormat(checkin) {
            const formatter = new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP',
            });

            let total = null;
            const days = this.getDiffDays(checkin);
            if (days.diff && days.diff > 0) {
                total = checkin.departments.value * days.diff;
            }

            return {
                formated: {
                    reserved: formatter.format(checkin.value),
                    total: formatter.format(total),
                    pending: formatter.format(total - checkin.value)
                },
                value: {
                    reserved: checkin.value,
                    total: total,
                    pending: (total - checkin.value)
                }
            }
        },

        getDiffDays(checkin) {
            const start_date = moment(checkin.start_date).format('YYYY-MM-DD');
            const end_date = moment(checkin.end_date, 'YYYY-MM-DD');

            const diff = end_date.diff(start_date, 'days') + 1;

            return {
                start_date: start_date,
                end_date: end_date,
                diff: diff
            };
        }
    }
}
</script>