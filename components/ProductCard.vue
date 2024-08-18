<template>
        <div>
            <div class="bg-secondary_m p-6 rounded-lg xl:block hidden">  
                <NuxtLink :to="product.url" class="hover:text-accent m-3">
                    <h2>{{product.title}}</h2>
                </NuxtLink>
                <div class=" flex flex-row">
                <div class="w-[50%]">
                    <p>{{product.short}}</p>
                    <h5>Description:</h5>
                    <div class="max-h-80 overflow-y-auto m-3">
                        <p>{{product.description}}</p>
                    </div>
                    <div v-if="product.release === 'Out Now'" class="m-10">
                        <btn class="border-2 rounded-lg p-3 hover:bg-highlight_m bg-accent_m hover:text-primary_m">Get Here</btn>
                    </div>
                    <div v-if="product.external" class="m-10">
                        <btn class="border-2 rounded-lg p-3 hover:bg-highlight_m bg-accent_m hover:text-primary_m">Get Here</btn>
                    </div>
                </div>

                    <div class="w-[50%] flex justify-center items-center relative">
                        <NuxtLink :to="product.url" class="hover:text-accent">
                                    <img :src="product.img" :alt="product.title" class="rounded-md m-2 p-6 bg-highlight_m shadow-md shadow-_m hover:shadow-_m"/>
                        </NuxtLink>
                        <span v-if="product.release" class="absolute top-2 right-3 shadow-lg shadow-primary_m_dark bg-accent_m text-highlight_m rounded-full p-2">{{product.release}}</span>
                    </div>
        
                </div>
            </div>

            <div class="bg-secondary_m p-6 rounded-lg xl:hidden ">  
                <NuxtLink :to="product.url" class="hover:text-accent m-3">
                    <h2>{{product.title}}</h2>
                </NuxtLink>
                <div class=" flex flex-col">
                    <div class="w-[100%]">
                        <p>{{product.short}}</p>
                        <h5>Description:</h5>
                        <div class="max-h-80 overflow-y-auto m-3">
                            <p>{{product.description}}</p>
                        </div>
                        <div v-if="product.release === 'Out Now'" class="m-10">
                            <a :href="product.url" class="border-2 rounded-lg p-3 hover:bg-highlight_m bg-accent_m hover:text-primary_m">Get Here</a>
                        </div>
                        <div v-if="product.external" class="m-10">
                            <a :href="product.url" class="border-2 rounded-lg p-3 hover:bg-highlight_m bg-accent_m hover:text-primary_m">Get Here</a>
                        </div>
                    </div>

                    <div class="w-[100%] flex justify-center items-center relative">
                        <NuxtLink :to="product.url" class="hover:text-accent">
                                    <img :src="product.img" :alt="product.title" class="rounded-md m-2 p-6 bg-highlight_m shadow-md shadow-_m hover:shadow-_m"/>
                        </NuxtLink>
                        <span v-if="product.release" class="absolute top-2 right-3 shadow-lg shadow-primary_m_dark bg-accent_m text-highlight_m rounded-full p-2">{{product.release}}</span>
                    </div>
        
                </div>
            </div>
        </div>

</template>

<script setup>
const props= defineProps({
    product: Object
})
</script>

<style lang="scss" scoped>

</style>