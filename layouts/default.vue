<template>
    <div class=" w-full text-LightYellow flex flex-col">
            <NavBar :atTopOfPage="atTopOfPage"/>
            <div class="flex flex-col" >
                <slot />
                <Footer />
            </div>
    </div>
</template>

<script setup lang="ts">
let atTopOfPage = ref(true)
onMounted(()=>{
    window.addEventListener('scroll', handleScroll);
})

const handleScroll = ()=>{
    if(window.pageYOffset>140){
            // user is scrolled
            if(atTopOfPage.value) atTopOfPage.value = false
        }else{
            // user is at top of page
            if(!atTopOfPage.value) atTopOfPage.value = true
        }
}
</script>

<style scoped>

</style>