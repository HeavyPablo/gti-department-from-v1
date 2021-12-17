<template>
    <div>
        <div class="row">
            <div v-for="rent in rents" :key="rent.id" class="col-sm-4">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="fs-3">{{ rent.departments.address }}
                            <span class="badge" :class="in_process(rent) ? 'badge-light-primary' : checkin_pending(rent) ? 'badge-light-warning' : finished(rent) ? 'badge-light-success' : 'badge-light-danger'">
                            {{ in_process(rent) ? 'EN CURSO' : checkin_pending(rent) ? 'CHECK IN PENDIENTE' : finished(rent) ? 'TERMINADO' : 'CANCELADO' }}
                        </span>
                        </div>
                        <div class="fs-4 my-2">desde: {{ dateFormat(rent.start_date) }}, hasta: {{ dateFormat(rent.end_date) }}</div>
                        <div class="fs-6 my-2">fecha de registro: {{ dateFormat(rent.created_at) }}</div>
                        <div v-if="checkin_pending(rent)" class="fs-3 my-2 text-primary">Hora de Check In: 10:00 hrs.</div>
                        <div v-if="in_process(rent)" class="fs-3 my-2 text-primary">Hora de Check Out: 18:00 hrs.</div>

                        <div class="btn-group-vertical">
                            <a :href="'/ViewClient/SearchDepartment/' + rent.departments.id" class="btn btn-primary">Ver departamento</a>
                            <a v-if="checkin_pending(rent)" class="btn btn-danger" @click="cancelRent(rent)">Cancelar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Rents from "../../services/Rents";
import moment from "moment";

export default {
    data() {
        return {
            rents: []
        }
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            const params = {
                username: localStorage.getItem('username')
            }

            await Rents.get(params, data => {
                this.rents = data;
            });
        },

        async cancelRent(rent) {
            this.$toast.open({
                message: 'Cancelando reserva...',
                type: 'warning'
            });

            await Rents.destroy(rent.id, () => {
                this.$toast.clear();
                this.$toast.open({
                    message: 'Reserva cancelada!',
                    type: 'success'
                });

                this.index();
            });
        },

        dateFormat(date) {
            return moment(date).format('DD/MM/YYYY');
        },

        in_process(rent) {
            return rent.status === 'ACCEPTED';
        },

        checkin_pending(rent) {
            return rent.status === 'RESERVED';
        },

        finished(rent) {
            return rent.status === 'FINISHED';
        },

        canceled(rent) {
            return rent.status === 'CANCELED';
        },
    }
}
</script>