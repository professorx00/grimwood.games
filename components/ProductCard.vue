<template>
    <NuxtLink :to="product.url" class="hover:text-accent m-3">
        <div class="bg-primary_m_light p-6 rounded-lg">
            <h2>{{product.title}}</h2>
            <hr class="p-2"/>
            <div class=" flex flex-row">
            <div class="w-[50%]">
                <p>{{product.short}}</p>
                <p>Price: {{product.price ? product.price : "TBD"}}</p>
                <p>Release: {{product.release}}</p>
            </div>
            <div class="w-[50%] relative">
                <img :src="product.img" :alt="product.title" class="w-[250px] h-[20ch] rounded-md shadow-md shadow-_m hover:shadow-_m"/>
                <span class="absolute top-5 right-3 shadow-lg shadow-primary_m_dark bg-accent_m text-highlight_m rounded-full p-2">Coming Soon</span>
            </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props= defineProps({
    product: Object
})
</script>

<style lang="scss" scoped>

</style>