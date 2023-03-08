<template>
    <div class=" text-highlight ">
        <button :type="type" :disabled="disabled" class="bg-secondary border rounded-lg text-xl p-4 m-4 disabled:bg-highlight_dark disabled:opacity-50 hover:text-accents">
            {{ title }}
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    type:{
        type: String,
        default: 'Submit'
    },
    disabled:{
        type: Boolean,
        default: true
    }
})
</script>

<style lang="scss" scoped>

</style>