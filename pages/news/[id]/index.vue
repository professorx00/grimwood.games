<template>
    <div>
        <div v-if="error">
            <span class="w-full text-accent_dark text-4xl">Error Retrieving Data please try again</span>
        </div>
        <div class="mt-3 flex flex-col justify-center items-center text-center p-5">
            <h1>{{ news.title }}</h1>
            <img :src="news.img" :alt="news.title" class="w-[25%] min-sm:w-full" />
            <p class="text-left w-[60%] min-sm:w-full">
                {{ news.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const params = route.params
const {id} = params
let error = false
let news = []
const {data} = await useFetch(`/api/news/${id}`)
if(data.value.statusCode === 404){
    error=true
}else{
    news = data.value.data
}
// "id": 1,
// "title": "Grimwood City in production",
// "description": "Welcome to Grimwood City, a sprawling metropolis where the supernatural and the mundane collide. This exciting new setting for Savage Worlds offers players the chance to explore a rich and complex world filled with danger, intrigue, and adventure. Grimwood City is a city of contrasts, where towering skyscrapers stand alongside ancient, crumbling ruins, and where magic and technology exist side-by-side. The city is divided into several distinct districts, each with its own unique flavor and personality. From the bustling downtown core to the sprawling suburbs, from the gritty industrial districts to the pristine parks and gardens, Grimwood City has something to offer everyone. In Grimwood City, players can take on the roles of powerful wizards, cunning detectives, fearless warriors, and more as they navigate the treacherous waters of a city where magic and technology are intertwined. With its rich history, complex political landscape, and diverse cast of characters, Grimwood City provides the perfect backdrop for thrilling adventures and unforgettable stories. So come and explore Grimwood City, where anything is possible and the only limit is your imagination!",
// "img": "https://images.unsplash.com/photo-1539035104074-dee66086b5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
// "url": "/news/1"

</script>

<style lang="scss" scoped>

</style>