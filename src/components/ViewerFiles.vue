<template>
    <div>
        <div class="w-100">
            <div class="d-flex justify-content-center align-items-center" v-if="file_selected" style="max-height: 300px">
                <img :src="file_selected" alt="" class="img-fluid" style="max-height: 300px">
            </div>

            <div v-else style="height: 300px" class="d-flex justify-content-center align-items-center">
                <img v-if="files && files[0]" :src="files[0].file_base64" alt="" class="img-fluid" style="max-height: 300px">
            </div>
        </div>

        <div class="w-100 overflow-y-scroll d-flex flex-nowrap" style="max-height: 200px; overflow-y: hidden">
            <button type="button" v-for="(file, index) in files" :key="index" class="btn btn-flat-primary mx-25 p-25" @click="selectFile(file.file_base64)" style="min-width: 100px">
                <img :src="file.file_base64" alt="Previsualizador" class="img-fluid">
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

    watch: {
        files() {
            console.log('updating..');
            if (this.files && this.files[0]) {
                this.selectFile(this.files[0].file_base64);
            }
        }
    },

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