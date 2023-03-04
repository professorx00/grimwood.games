<template>
  <!--MD or Higher-->
    <div v-if="!atTopOfPage" class="sticky top-0 left-0 bg-primary flex-row h-[10ch] z-50 hidden md:flex" >
      <div class="flex flex-row items-center space-x-3">
        <h2>Follow Us</h2>
        <ul class="flex flex-row space-x-2">
          <li><a href="https://discord.gg/MEycW8uBPX" target="_blank"><i class="bi bi-discord text-2xl hover:text-accent"></i></a></li>
          <li><a href="https://www.twitch.tv/grimwood_games" target="_blank"><i class="bi bi-twitch text-2xl hover:text-accent"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC_vlr0YCUaX9yJ5uMGIe9UQ" target="_blank"><i class="bi bi-youtube text-2xl hover:text-accent"></i></a></li>
          <li><a href="https://twitter.com/Grimwood_Games"><i class="bi bi-twitter text-2xl hover:text-accent" target="_blank"></i></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100090535811764" target="_blank"><i class="bi bi-facebook text-2xl hover:text-accent"></i></a></li>
        </ul>
      </div>
      <div class="w-[60%] flex flex-row justify-center items-center">
        <SmallLogo />
      </div>
      <div class="flex flex-row h-full items-center justify-center">
        <ul class="flex flex-row w-full items-center space-x-5">
          <li><h2 class="hover:text-accent"><NuxtLink to="/about">AboUt</NuxtLink></h2></li>
          <li><h2 class="hover:text-accent"><NuxtLink to="/products">ProdUcts</NuxtLink></h2></li>
          <li><h2 class="hover:text-accent"><NuxtLink to="/news">News</NuxtLink></h2></li>
          <li><h2 class="hover:text-accent"><NuxtLink to="/community">CommUnity</NuxtLink></h2></li>
        </ul>
      </div>
    </div>
    <div class="z-50 min-h-[25ch] md:flex hidden flex-col bg-ForestGreen transition-all duration-1000" :class="atTopOfPage ? 'opacity-100 visible': 'opacity-0 invisible'">
      <div class="flex flex-row w-full items-center space-x-3">
        <h2>Follow Us</h2>
        <ul class="flex flex-row space-x-2">
          <li><a href="https://discord.gg/MEycW8uBPX" target="_blank"><i class="bi bi-discord text-2xl hover:text-accent"></i></a></li>
          <li><a href="https://www.twitch.tv/grimwood_games" target="_blank"><i class="bi bi-twitch text-2xl hover:text-accent"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC_vlr0YCUaX9yJ5uMGIe9UQ" target="_blank"><i class="bi bi-youtube text-2xl hover:text-accent"></i></a></li>
          <li><a href="https://twitter.com/Grimwood_Games"><i class="bi bi-twitter text-2xl hover:text-accent" target="_blank"></i></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100090535811764" target="_blank"><i class="bi bi-facebook text-2xl hover:text-accent"></i></a></li>
        </ul>
      </div>
      <div class="flex flex-row h-full items-center justify-center">
        <ul class="flex flex-row w-full justify-around items-center">
          <li><h1 class="hover:text-accent"><NuxtLink to="/about">AboUt</NuxtLink></h1></li>
          <li><h1 class="hover:text-accent"><NuxtLink to="/products">ProdUcts</NuxtLink></h1></li>
          <li><NuxtLink to="/"><LargeLogo/></NuxtLink></li>
          <li><h1 class="hover:text-accent"><NuxtLink to="/news">News</NuxtLink></h1></li>
          <li><h1 class="hover:text-accent"><NuxtLink to="/community">CommUnity</NuxtLink></h1></li>
        </ul>
      </div>
    </div>
    <div class="z-50 sticky top-0 bg-primary md:hidden flex flex-row justify-center items-center">
      <SmallLogo />
    </div>
 </template>

<script setup lang="ts">
const props = defineProps({
  atTopOfPage: Boolean
})
</script>

<style scoped>

</style>