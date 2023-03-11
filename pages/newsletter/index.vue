<template>
    <div class="flex flex-col justify-center items-center p-10">
        <form class="flex flex-col w-[50%] bg-highlight m-32 p-10" :onsubmit="handleSubmit">
            <div class="w-full flex flex-row justify-center">
                <h1 class="text-4xl text-primary">Subscribe to our newsletter</h1>
            </div>
            <div class="flex flex-row w-full items-center justify-start p-4 text-2xl text-primary">
                <label for="email">Email</label>
                <input name="email" id="email" type="email" placeholder="Email" class="bg-secondary border border-primary m-6 p-3 w-full rounded-lg"/>
            </div>
            <div class="flex flex-row w-full justify-center items-center">
                <button class="bg-secondary text-accent hover:bg-accent hover:text-secondary p-3 m-6 w-[10%] rounded-lg">Subscribe</button>
                 <NewsletterLaptop class="w-[20%]"/>
            </div>
        </form>
    </div>
</template>

<script setup>
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
}
</script>

<style lang="scss" scoped>

</style>