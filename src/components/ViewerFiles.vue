<template>
    <div>
        <div class="w-100">
            <div v-if="file_selected" style="max-height: 300px">
                <img :src="file_selected" alt="" class="img-fluid">
            </div>

            <div v-else style="height: 200px">
                <img :src="files && files[0] ? files[0].base64 : ''" alt="" class="img-fluid">
            </div>

        </div>

        <div class="w-100 overflow-y-scroll d-flex flex-nowrap" style="max-height: 200px; overflow-y: hidden">
            <button type="button" v-for="(file, index) in files" :key="index" class="btn btn-flat-primary mx-25 p-25" @click="selectFile(file.base64)" style="min-width: 100px">
                <img :src="file.base64" alt="Previsualizador" class="img-fluid">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file_selected: ''
        }
    },

    props: ['files'],

    methods: {
        selectFile(file) {
            this.file_selected = file;
        }
    }
}
</script>

<style>
.hover-file {

}
</style>