<template>
  <!--MD or Higher 900px or higher-->
    <div v-if="!atTopOfPage" class="sticky top-0 left-0 bg-primary_m flex-row h-[15ch] z-50 hidden lg:flex" >
      <div class="flex flex-row items-center space-x-3">
        <h2>Follow Us</h2>
        <ul class="flex flex-row space-x-2">
          <li><a href="https://discord.gg/MEycW8uBPX" target="_blank"><i class="bi bi-discord text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://www.twitch.tv/grimwood_games" target="_blank"><i class="bi bi-twitch text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC_vlr0YCUaX9yJ5uMGIe9UQ" target="_blank"><i class="bi bi-youtube text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://twitter.com/Grimwood_Games"><i class="bi bi-twitter text-2xl hover:text-accent_m" target="_blank"></i></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100090535811764" target="_blank"><i class="bi bi-facebook text-2xl hover:text-accent_m"></i></a></li>
        </ul>
      </div>
      <div class="w-[60%] flex flex-row justify-center items-center">
       <NuxtLink to="/">
        <img src="~/assets/images/logo_hz_white.svg" alt="Grimwood Games Logo" class="w-[30ch] min-w-[30ch]">
      </NuxtLink>
      </div>
      <div class="flex flex-row h-full items-center justify-center">
        <ul class="flex flex-row w-full items-center space-x-5">
          <li><h2 class="hover:text-accent_m"><NuxtLink to="/about">About</NuxtLink></h2></li>
          <!-- <li><h2 class="hover:text-accent"><NuxtLink to="/products">ProdUcts</NuxtLink></h2></li> -->
          <!-- <li><h2 class="hover:text-accent"><NuxtLink to="/news">News</NuxtLink></h2></li> -->
          <li><h2 class="hover:text-accent_m"><NuxtLink to="/community">CommUnity</NuxtLink></h2></li>
        </ul>
      </div>
    </div>
    <div class="z-50 min-h-[10%] lg:flex hidden flex-col bg-ForestGreen transition-all duration-1000" :class="atTopOfPage ? 'opacity-100 visible': 'opacity-0 invisible'">
      <div class="flex flex-row w-full items-center space-x-3">
        <h2>Follow Us</h2>
        <ul class="flex flex-row space-x-2">
          <li><a href="https://discord.gg/MEycW8uBPX" target="_blank"><i class="bi bi-discord text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://www.twitch.tv/grimwood_games" target="_blank"><i class="bi bi-twitch text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC_vlr0YCUaX9yJ5uMGIe9UQ" target="_blank"><i class="bi bi-youtube text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://twitter.com/Grimwood_Games"><i class="bi bi-twitter text-2xl hover:text-accent_m" target="_blank"></i></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100090535811764" target="_blank"><i class="bi bi-facebook text-2xl hover:text-accent_m"></i></a></li>
        </ul>
      </div>
      <div class="flex flex-row h-full items-center justify-center">
        <ul class="flex flex-row space-x-14 mx-4">
          <li><h1 class="hover:text-accent_m"><NuxtLink to="/about">AboUt</NuxtLink></h1></li>
          <!-- <li><h1 class="hover:text-accent_m"><NuxtLink to="/products">ProdUcts</NuxtLink></h1></li> -->
        </ul>
        <NuxtLink to="/">
        <!-- <img src="~/assets/images/LogoTall.png" alt="Grimwood Games Logo" class="w-[40ch]"> -->
        <img src="~/assets/images/Logo_vrt.svg" alt="Grimwood Games Logo" class="w-[20ch]">
      </NuxtLink>
        <ul class="flex flex-row space-x-14 mx-4">
          <!-- <li><h1 class="hover:text-accent_m"><NuxtLink to="/news">News</NuxtLink></h1></li> -->
          <li><h1 class="hover:text-accent_m"><NuxtLink to="/community">CommUnity</NuxtLink></h1></li>
        </ul>
      </div>
    </div>
    <!--SM-->
    <div class="z-50 sticky top-0 bg-primary_m lg:hidden flex flex-col justify-center items-center">
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-1/3 justify-center">
          <button v-if="!modal" class="p-2 text-5xl" @click="handleHamburger"><i class="bi bi-list"></i></button>
          <button v-if="modal" class="p-2 text-5xl" @click="handleHamburger"><i class="bi bi-x-circle"></i></button>
        </div>
        <div>
          <NuxtLink to="/"><img src="~/assets/images/logo_hz_white.svg" alt="Grimwood Games Logo" class="w-[30ch] min-w-[30ch]"></NuxtLink>
        </div>
      </div>

    <div v-if="modal" class="w-screen h-[95vh] flex flex-col items-center justify-between">
      <div class="flex flex-col w-full h-[50vh] justify-center items-center">
        <ul class="flex flex-col w-full items-center">
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/about">About</NuxtLink></button></h2></li>
          <!-- <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/products">ProdUcts</NuxtLink></button></h2></li>
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/news">News</NuxtLink></button></h2></li> -->
          <li><h2 class="hover:text-accent_m md:text-5xl text-3xl m-5"><button @click="handleHamburger"><NuxtLink to="/community">Community</NuxtLink></button></h2></li>
        </ul>
      </div>
      <div class="flex flex-row h-full space-x-3 ">
        <h2>Follow Us</h2>
        <ul class="flex flex-row space-x-2">
          <li><a href="https://discord.gg/MEycW8uBPX" target="_blank"><i class="bi bi-discord text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://www.twitch.tv/grimwood_games" target="_blank"><i class="bi bi-twitch text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC_vlr0YCUaX9yJ5uMGIe9UQ" target="_blank"><i class="bi bi-youtube text-2xl hover:text-accent_m"></i></a></li>
          <li><a href="https://twitter.com/Grimwood_Games"><i class="bi bi-twitter text-2xl hover:text-accent_m" target="_blank"></i></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100090535811764" target="_blank"><i class="bi bi-facebook text-2xl hover:text-accent_m"></i></a></li>
        </ul>
      </div>
    </div>
    </div>
 </template>

<script setup>
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