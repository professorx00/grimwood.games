<template>
    <div>
        <div v-if="error">
            <h1>Something went wrong</h1>
        </div>
        <div v-else>
            <div v-if="news.length > 0" class="w-full p-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div v-for="article in news" class="m-2 ">
           <Card :article="article"/>
          </div>
        </div>
        </div>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/news');

let news = []
let error = false

if(data.value.statusCode == 200){
  news = data.value.data
}else{
    news = []
    error = true
}
</script>

<style lang="scss" scoped>

</style>