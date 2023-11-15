<template>
    <div class="flex flex-col justify-center items-center w-[95%] mt-2">

        <VField :name="name" v-slot="{field,meta,errors}">
            <div class="flex flex-row w-full ">
                <label class="w-[20%] text-2xl text-right m-3 text-highlight_m">{{ label }}</label>
                <div class="w-[70%] flex flex-row text-2xl relative shadow-lg">
                    <input v-bind="field" class="w-full p-3 rounded-lg border-4 border-primary_m focus:border-4 focus:border-accent_m" :class="{[errorClass]: meta.touched && !meta.vaild && errors.length>0 && field.value !='', 'border-2 border-secondary_m bg-secondary_m bg-opacity-40': meta.touched && meta.valid && errors.length <=0 }" :placeholder="placeholder" :type="type" />
                    <div v-if="meta.touched && meta.valid && errors.length <=0" class="h-full  flex flex-row text-2xl justify-center items-center absolute top-0 right-5"><i class="bi bi-check-circle-fill" ></i></div>
                    <div v-if="meta.touched && !meta.vaild && errors.length>0 && field.value !=''" class="h-full  flex flex-row text-2xl justify-center items-center absolute top-0 right-5"><i class="bi bi-exclamation-octagon-fill"></i></div>
                </div>
            </div>
            <div v-if="errors.length>0 && field.value !=''" class="w-full flex flex-row justify-center items-center text-2xl text-accent_m">
                <VErrorMessage :name="name" as="div" class="" />
            </div>
        </VField>
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
 const errorClass = 'bg-accent_m_dark border-2 border-accent_m_dark bg-opacity-40'
 const successClass = 'bg-secondary_m'
</script>

<style lang="scss" scoped>
</style>