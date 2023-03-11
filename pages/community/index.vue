<template>
    <div class="h-full w-full flex flex-col justify-center items-center">
        <div class=" w-full bg-DarkRose">
            <NuxtLink to="https://discord.gg/MEycW8uBPX" class="hover:text-accent_light w-full flex md:flex-row flex-col justify-center items-center p-2">
                <h1>Come Join our </h1>
                <div class="flex flex-row justify-center items-center ml-2">
                    <h1>Discord</h1>
                    <i class="bi bi-discord text-5xl lg:ml-2 ml-1 hover:text-accent"></i>
                </div>
            </NuxtLink>
        </div>
        <div class="p-5 text-primary w-full flex flex-col justify-center items-center">
            <FormsMessageForm />
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>