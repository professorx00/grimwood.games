<template>
    <div class="flex flex-col justify-center items-center ">
      <div class="h-screen w-screen flex flex-col justify-center items-center">
        <div class="w-full md:h-full h-[50%] relative">
          <div id="background" class="z-0">
              <img src="~/assets/images/imagination.jpg" class="h-full w-full" alt="" />
          </div>
          <div class="w-full h-full z-30 absolute">
            <div class="md:w-[50%] w-full h-[50%] flex flex-col justify-center items-center">
              <h1 class="w-[60%] md:text-4xl text-xl" >Discover new worlds, embark on thrilling adventures, and unleash your imagination with Grimwood Games</h1>
            </div>
            <div class="md:w-[50%] w-full h-[50%] flex flex-col">
              <div class="ml-[20%]">
                <NuxtLink class="lg:text-4xl md:text-2xl text-xl border-2 rounded-lg p-3 bg-secondary hover:bg-accent hover:text-primary"  to="/newsletter">Subscribe to Newsletter</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full my-9 flex flex-col justify-center items-center ">
        <div class="w-full text-left">
          <h1 class="ml-6">News</h1>
        </div>
        <div v-if="news.length > 0" class="w-[80%] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div v-for="article in news" class="m-2">
           <Card :article="article"/>
          </div>
        </div>
        <div v-if="error">
          <span> No Current News</span>
        </div>
      </div>
      <div class="w-full h-[50%] p-3 flex md:flex-row flex-col justify-center items-start">
        <div class="lg:w-[50%] w-full h-full flex flex-col justify-around items-center bg-adventure bg-cover rounded-xl m-3">
            <div class="flex flex-col justify-center items-center bg-secondary p-3 rounded-xl border-2">
              <h1 class="text-5xl">SUBSCRIBE</h1>
              <p class="text-2xl">TO OUR</p>
              <h1 class="text-4xl">NEWSLETTER</h1>
            </div>
            <NuxtLink class="text-4xl border-2 rounded-lg p-3 bg-secondary hover:bg-accent hover:text-primary"  to="/newsletter">Sign Up Here</NuxtLink>
        </div>
        <div class="lg:w-[50%] h-full w-full bg-secondary rounded-lg m-4">
          <NewsletterLaptop class="w-full h-full"/>
        </div>
      </div>
      <div class="w-full my-5 flex flex-col justify-center items-center">
        <div class="text-left w-full">
          <h1 class="ml-6">Weekly Stream Schedule</h1>
        </div>
        <div class="w-[90%] m-6 grid lg:grid-cols-7 sm:grid-cols-2 grid-cols-1">
          <div v-for="day in schedule">
            <div class="border-2">
              <div class="flex flex-col justify-center items-center bg-secondary"><h2>{{ day.day }}</h2></div>
              <hr />
              <div v-if="day.events.length > 0" class="h-[10ch] flex flex-col justify-center items-center p-6">
                <div v-for="event in day.events">
                  <h4>{{ event.title }} @ {{ event.time.time }}</h4>

                </div>
              </div>
              <div v-if="!day.events.length > 0" class="h-[10ch] flex flex-col justify-center items-center"> No Stream</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import {useFormatTime} from '../composables/lux'
let news = []
let error = false
const {data} = await useFetch('/api/latest');
if(data.value.statusCode == 200){
  news = data.value.data
}else{
  news = []
  error = true
}
const schedule = [
  {
    day:"Sunday",
    events:[]
  },
  {
    day:"Monday",
    events:[]
  },
  {
    day:"Tuesday",
    events:[]
  },
  {
    day:"Wednesday",
    events:[{
      title:"Grimwood Development Stream",
      time: useFormatTime('1/1/2023 08:00:00 PM')
    }]
  },
  {
    day:"Thursday",
    events:[]
  },
  {
    day:"Friday",
    events:[]
  },
  {
    day:"Saturday",
    events:[]
  },
]
</script>

<style scoped>
#background {
    width: 100%; 
    height: 100%; 
    position: absolute; 
    left: 0px; 
    top: 0px; 
    opacity: 10;
}
</style>

