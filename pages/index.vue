<template>
    <div class="flex flex-col justify-center items-center">
      <div class="md:w-[80%] w-full relative">
        <img src="~/assets/images/mainHero.jpg" class="opacity-30"/>
        <div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
          <h1 class="md:text-5xl text-2xl drop-shadow-xl shadow-primary_dark">Coming Soon Grimwood City</h1>
        </div>
      </div>
      <div class="md:w-[80%] w-full my-9">
        <h1>News</h1>
        <div class="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div v-for="article in news" class="m-2">
           <Card :article="article"/>
          </div>
        </div>
      </div>
      <div>
        <h1>Newsletter</h1>
      </div>
      <div>
        <h1>Stream Schedule</h1>
      </div>
    </div>
</template>

<script setup lang="ts">
const news = [
  {
    id: 1,
    title: "Grimwood City in production",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/1'
  },
  {
    id: 2,
    title: "Rise of Midnight Sun",
    description: "Coming Soon! A new adventure set in the exciting world of Grimwood City. Can your party help the mayor save his son before he has to pardon a terriost?",
    img: 'https://picsum.photos/600',
    url: '/articles/2'
  },
  {
    id: 3,
    title: "Article 3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/3'
  },
  {
    id: 4,
    title: "Article 4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/4'
  },
  {
    id: 5,
    title: "Article 5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/5'
  },
]
</script>

<style scoped>

</style>

