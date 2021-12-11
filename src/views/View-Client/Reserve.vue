<template>
    <div>
        <div class="row">
            <div v-for="rent in rents" :key="rent.id" class="">

            </div>
        </div>
    </div>
</template>
<script>
import Rents from "../../services/Rents";

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
        }
    }
}
</script>