<template>
    <div class="bg-BlueBlack min-h-screen h-screen w-screen text-LightYellow flex flex-col relative">
            <NavBar />
            <div class="flex flex-col justify-center items-center w-screen"><slot /></div>
            <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>