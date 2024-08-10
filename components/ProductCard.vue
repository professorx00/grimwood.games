<template>
        <div class="bg-secondary_m p-6 rounded-lg">
            
            <NuxtLink :to="product.url" class="hover:text-accent m-3">
                <h2>{{product.title}}</h2>
            </NuxtLink>
            <hr class="p-2"/>
            <div class=" flex flex-row">
            <div class="w-[50%]">
                <p>{{product.short}}</p>
                <h5>Description:</h5>
                <div class="max-h-80 overflow-y-auto m-3">
                    <p>{{product.description}}</p>
                </div>
            </div>

                <div class="w-[50%] flex justify-center items-center relative">
                    <NuxtLink :to="product.url" class="hover:text-accent">
                                <img :src="product.img" :alt="product.title" class="rounded-md m-2 p-6 bg-highlight_m shadow-md shadow-_m hover:shadow-_m"/>
                    </NuxtLink>
                    <span v-if="product.release" class="absolute top-2 right-3 shadow-lg shadow-primary_m_dark bg-accent_m text-highlight_m rounded-full p-2">{{product.release}}</span>
                </div>
      
            </div>
        </div>

</template>

<script setup>
const props= defineProps({
    product: Object
})
</script>

<style lang="scss" scoped>

</style>