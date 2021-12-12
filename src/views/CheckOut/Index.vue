<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Check-out Resgistro de termino de estadía.</h4>
            </div>

            <div class="card-body">
                <table id="CheckOutTable" class="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Departamento</th>
                        <th>Fecha de llegada</th>
                        <th>Fecha de salida</th>
                        <th>Cliente</th>
                        <th class="no-sort text-end">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(checkout, index) in checkouts" :key="index">
                        <td class="align-middle">{{ checkout.id }}</td>
                        <td class="align-middle">
                            <div v-if="checkout.departments">
                                <div class="border-bottom">
                                    <span class="fw-bold">#{{ checkout.departments.id }}</span>
                                    {{ checkout.departments.address }}
                                </div>
                                <div class="font-small-3">
                                    {{ checkout.departments.description }}
                                </div>
                            </div>
                        </td>
                        <td class="align-middle">{{ dateFormat(checkout.start_date) }}</td>
                        <td class="align-middle">{{ dateFormat(checkout.end_date) }}</td>
                        <td class="align-middle">
                            <div v-if="checkout.user">
                                <div class="border-bottom">
                                    {{ checkout.user.name }} {{ checkout.user.last_name }}
                                </div>
                                <div class="fs-6">
                                    {{ checkout.user.email }}
                                </div>
                            </div>
                        </td>
                        <td class="align-middle text-end">
                            <button type="button" class="btn btn-success mx-2" @click="show(checkout)"
                                    data-bs-toggle="modal" data-bs-target="#dlgNewCheckOut">
                                <vue-feather type="check-circle" size="14"></vue-feather>
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

import CheckOut from '../../services/CheckOut';
import RegistrationCreate from './Create';
import {Modal} from 'bootstrap';
import moment from "moment";

const $ = require('jquery');

export default {
    components: { RegistrationCreate },

    data() {
        return {
            checkouts: [],
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

            $('#CheckOutTable').DataTable().destroy();

            const params = {
                status: 'ACCEPTED'
            }

            await CheckOut.get(params, data => {
                this.checkouts = data;

                this.$nextTick(() => {
                    $('#CheckOutTable').DataTable(config);
                })
            });
        },

        async update() {
            this.$toast.clear();
            await CheckOut.update(this.edit.id, this.edit, () => {
                this.edit = {};

                this.$toast.open({
                    message: 'Check Out actualizado!',
                    type: 'success'
                });

                var myModalEl = document.getElementById('dlgNewCheckOut')
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

        dateFormat(date) {
            return moment(date).format('YYYY-MM-DD');
        }
    }
}
</script>