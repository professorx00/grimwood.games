<template>
    <div class="w-full md:h-[70vh] flex justify-center items-center my-5 overflow-y-scroll">
        <div v-if="error">
            {{ error }}
        </div>
        <div class="w-[100%] p-11 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <ProductCard v-for="product in products" :product="product" :key="product.id"/>
        </div>
    </div>
</template>

<script setup>
   const {data} = await useFetch('/api/products');
   let products = [
    {
        id: 1,
        title: "Grimwood City for EZD6",
        short: "A setting for your EZD6",
        description:
        "Welcome to Grimwood City, a sprawling metropolis where magic and technology collide amidst towering skyscrapers and ancient ruins. In this rich and complex world, players can explore diverse districts, take on roles like wizards, detectives, and warriors, and navigate a city filled with intrigue and adventure. Grimwood City offers endless possibilities for thrilling stories and unforgettable adventures.",
        price: null,
        release: "Out Now",
        img: "FrontCover_Ezd6.jpg",
        url: "/ezd6"
    },
    {
        id: 1,
        title: "Ironbound: An Urban Fantasy RPG",
        short: "A new exciting new game system!",
        description:
        "Ironbound is a tabletop RPG set in the mystical cityscape of Grimwood City, where arcane secrets and urban adventures collide. Players delve into a world where magic is real, hidden within the shadows of a modern city environment. With a unique 1d12 system, Ironbound emphasizes strategic gameplay through boons, banes, and Pool Points that influence every decision. From navigating dangerous alleys to battling dark forces, players will forge their destinies, uncover hidden truths, and protect the city from looming threats. Join the adventure and shape the fate of Grimwood City in Ironbound.",
        price: null,
        release: "Coming Soon",
        img: "Ironbound_cover.jpg",
        url: "/system"
    },
    {
        id: 1,
        title: "Check out our Merch",
        short: "We have tons of Merchandise for Ironbound and Grimwood",
        description:
        "Take a looking all the great merchandise we have on out Spring store",
        price: null,
        img: "Hat.jpg",
        url: "https://grimwoodgames.creator-spring.com/"
    }
   ]
  
</script>

<style lang="scss" scoped>

</style>