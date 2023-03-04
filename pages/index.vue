<template>
    <div class="flex flex-col justify-center items-center">
      <div class="h-screen w-screen flex flex-col justify-center items-center">
        <div class="w-full h-full bg-hero bg-cover">
          <div class="w-[50%] h-[50%] flex flex-col justify-center items-center">
            <h1 class="w-[60%]" >Discover new worlds, embark on thrilling adventures, and unleash your imagination with Grimwood Games</h1>
          </div>
          <div class="w-[50%] h-[50%] flex flex-col">
            <div class="ml-[20%]">
              <NuxtLink class="text-4xl border-2 rounded-lg p-3 bg-secondary hover:bg-accent hover:text-primary"  to="/newsletter">Subscribe to Newsletter</NuxtLink>
            </div>
          </div>
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
      <div class="w-[80%] h-[50%] p-3 flex flex-row justify-center items-start">
        <div class="w-[50%] h-[80%] flex flex-col justify-between items-center bg-adventure bg-cover rounded-xl mx-3">
          <div class="flex flex-col justify-center items-center h-[50%]">
            <div class="flex flex-col justify-center items-center bg-secondary p-3 rounded-xl border-2">
              <h1 class="text-6xl">SUBSCRIBE</h1>
              <p>TO OUR</p>
              <h1>NEWSLETTER</h1>
            </div>
          </div>
          <div class="flex flex-col justify-start items-center w-full h-[50%]">
            <NuxtLink class="text-4xl border-2 rounded-lg p-3 bg-secondary hover:bg-accent hover:text-primary"  to="/newsletter">Sign Up Here</NuxtLink>
          </div>
        </div>
        <div class="w-[50%] h-[80%] bg-secondary rounded-lg">
          <NewsletterLaptop class="w-full"/>
        </div>
      </div>
      <div class="md:w-[80%] w-full my-5">
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

