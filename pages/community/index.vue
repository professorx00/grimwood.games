<template>
    <div class="h-full w-full flex flex-col justify-center items-center">
        <NuxtLink to="https://discord.gg/MEycW8uBPX" class="hover:text-accent_light flex flex-row m-6 justify-center items-center w-full"><h1>Come Join our Discord</h1><i class="bi bi-discord text-5xl ml-2 hover:text-accent"></i></NuxtLink>
        <div class="p-5 text-primary w-full flex flex-col justify-center items-center">
            <FormsMessageForm />
        </div>
    </div>
</template>

<script setup>
import * as yup from "yup";


</script>

<style lang="scss" scoped>

</style>