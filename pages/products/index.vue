<template>
    <div class="w-full min-h-[95%] h-[95%]">
        <div v-if="error">
            {{ error }}
        </div>
        <div class="w-full p-20 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 space-x-3">
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