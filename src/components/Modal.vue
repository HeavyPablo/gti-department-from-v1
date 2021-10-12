<template>
    <div>
        <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" :class="size">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <button v-if="close" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="test">Cerrar</button>
                    <slot name="btnSuccess"></slot>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        id: String,
        title: String,
        close: {
            type: Boolean,
            default: true
        },
        size: String
    },
}
</script>