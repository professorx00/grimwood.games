<template>
    <div class="w-full min-h-[95%] bgPage">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="product.title !== 'Loading...' " class="w-full flex flex-row">
            <div class="w-[50%] flex flex-col justify-center items-center text-center bgPage">
                <h1 class="border-b-2 w-[80%]">{{product.title}}</h1>
                <table class="w-[50%]">
                    <tr>
                        <th>
                            Price
                        </th>
                        <th>
                            Release
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {{product.price ? product.price : "TBD"}}
                        </td>
                        <td>
                            {{product.release}}
                        </td>
                    </tr>
                </table>
                <div class="w-[80%] text-left">
                    {{ product.description  }}
                </div>

            </div>
            <div class="w-[50%] flex flex-col justify-center items-center text-center ">
                <img :src="product.img" :alt="product.title" class=" rounded-md shadow-md shadow-primary_m hover:shadow-secondary_m"/>
            </div>

        </div>
    </div>
</template>

<script setup>
    const route = useRoute();
    const id = route.params.id;
    const {data, loading} = await useLazyFetch(`/api/products/${id}`);
    let product = {title: "Loading...", description: "Loading...", price: "Loading...", release: "Loading...", img: "Loading..."};
    let error = false;
    if(data.value.statusCode == 200){
        product = data.value.data;
    }

</script>

<style lang="scss" scoped>

</style>


