<template>
    <div class="w-full md:h-screen flex justify-center items-start my-5">
        <div v-if="error">
            {{ error }}
        </div>
        <div class="w-[80%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <ProductCard v-for="product in products" :product="product" :key="product.id"/>
        </div>
    </div>
</template>

<script setup>
   const {data} = await useFetch('/api/products');
   let products = []
   let error = false
   if(data.value.statusCode == 200){
       products = data.value.data
   }
   if(data.value.statusCode == 404){
        error=true
        products = []
   }
</script>

<style lang="scss" scoped>

</style>