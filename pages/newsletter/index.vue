<template>
    <div v-if="!signedUp" class="flex flex-col justify-center items-center p-10">
        <form class="flex flex-col w-[50%] bg-highlight m-32 p-10" :onsubmit="handleSubmit">
            <div class="w-full flex flex-row justify-center">
                <h1 class="text-4xl text-primary_m">Subscribe to our newsletter</h1>
            </div>
            <div class="flex flex-row w-full items-center justify-start p-4 text-2xl text-primary_m">
                <label for="email">Email</label>
                <input name="email" id="email" type="email" placeholder="Email" class="bg-secondary_m border border-primary_m m-6 p-3 w-full rounded-lg"/>
            </div>
            <div class="flex flex-row w-full justify-center items-center">
                <button class="bg-secondary_m text-accent_m hover:bg-accent_m hover:text-secondary_m p-3 m-6 w-[10%] rounded-lg">Subscribe</button>
                 <NewsletterLaptop class="w-[20%]"/>
            </div>
        </form>
    </div>
     <div v-if="signedUp" class="flex flex-col justify-center items-center p-10">
        <h1 class="text-highlight_m">Thank you for signing up to the newsletter</h1>
    </div>
</template>

<script setup>
const signedUp = ref(false);
const handleSubmit = async (e) => {
    e.preventDefault();
    const {data}= await useFetch('/mail/newsletter',{ method: 'POST', body: {email}})
    if(data.value.statusCode === 200){
        signedUp.value = true;
    }
}
</script>

<style lang="scss" scoped>

</style>