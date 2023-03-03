<template>
    <div class="w-full bg-highlight_dark rounded-sm p-5">
        <NuxtLink :to="article.url" class="text-primary_dark hover:text-secondary">
        <h2 class="font-bold">{{ article.title }}</h2>
        <hr/>
        <div v-if="article.img" class="w-full flex flex-col p-2 justify-center items-center">
            <img :src="article.img" :alt="article.title" class="w-[250px] rounded-md shadow-md shadow-primary hover:shadow-secondary"/>
        </div>
        
            {{ article.description.slice(0,150) }}...
        </NuxtLink>
    </div>
</template>

<script setup>
const props= defineProps({
    article: Object
})
</script>

<style lang="scss" scoped>

</style>