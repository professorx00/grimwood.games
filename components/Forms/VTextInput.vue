<template>
    <div class="flex flex-row justify-center items-center w-[95%] mt-2">

        <label class="w-[20%] text-2xl text-right m-3 text-highlight">{{ label }}</label>
        <VField :name="name" v-slot="{field,meta,errors}">
            <input v-bind="field" class="w-[70%] p-3 text-2xl text-primary" :placeholder="placeholder" :type="type" />
        </VField>
    </div>
    <div class="w-full flex flex-row justify-center items-center text-2xl text-accent">
        <VErrorMessage :name="name" as="div" class="" />
    </div>
</template>

<script setup>
 const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    },
    placeholder: {
        type: String, 
        default: ""
    }
 })
</script>

<style lang="scss" scoped>

</style>