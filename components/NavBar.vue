<template>
  <!--MD or Higher 900px or higher-->
    <div class="sticky top-0 left-0 bg-ForestGreen flex-row h-[20ch] z-50 hidden lg:flex " >
      <div class="w-[60%] flex flex-row justify-center items-center">
       <NuxtLink to="/">
        <IconLogo class="text-[12rem]" />
      </NuxtLink>
      </div>
      <div class="flex flex-row h-full items-center justify-center">
        <ul class="flex flex-row w-full items-center space-x-5">
          <li><h2 class="hover:text-accent_m"><NuxtLink to="/about">About</NuxtLink></h2></li>
          <li><h2 class="hover:text-accent_m"><NuxtLink to="/system">Ironbound</NuxtLink></h2></li>
          <li><h2 class="hover:text-accent_m"><NuxtLink to="/products">Products</NuxtLink></h2></li>
          <li><h2 class="hover:text-accent_m"><NuxtLink to="/starter">Free Quick Starter Guide</NuxtLink></h2></li>
          <li><h2 class="hover:text-accent_m"><a href="/merch">Merch Store</a></h2></li>
        </ul>
      </div>
    </div>
    <div class="z-50 sticky top-0 bg-primary_m lg:hidden flex flex-col justify-center items-center">
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-1/3 justify-center">
          <button v-if="!modal" class="p-2 text-5xl" @click="handleHamburger"><i class="bi bi-list"></i></button>
          <button v-if="modal" class="p-2 text-5xl" @click="handleHamburger"><i class="bi bi-x-circle"></i></button>
        </div>
        <div>
          <NuxtLink to="/"><IconLogo class="text-[12rem]" /></NuxtLink>
        </div>
      </div>

    <div v-if="modal" class="w-screen h-[95vh] flex flex-col items-center justify-between">
      <div class="flex flex-col w-full h-[50vh] justify-center items-center">
        <ul class="flex flex-col w-full items-center">
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/about">About</NuxtLink></button></h2></li>
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/system">Ironbound</NuxtLink></button></h2></li>
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/products">Products</NuxtLink></button></h2></li>
          <!-- <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/news">News</NuxtLink></button></h2></li> -->
          <!-- <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/community">Community</NuxtLink></button></h2></li> -->
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/community">Free Quick Starter Guide</NuxtLink></button></h2></li>
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><a href="/merch">Store</a></button></h2></li>
        </ul>
      </div>
    </div>
    </div>
 </template>

<script setup>
import IconLogo from '~/assets/images/logo_hz_white.svg'
const { width, height } = useWindowSize()
const props = defineProps({
  atTopOfPage: Boolean
})
const modal = ref(false)
const handleHamburger = (event)=>{
  console.log(event.target)
  modal.value = !modal.value
} 
</script>

<style scoped>

</style>