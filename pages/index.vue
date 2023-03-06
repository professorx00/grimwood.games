<template>
    <div class="flex flex-col justify-center items-center">
      <div class="h-screen w-screen flex flex-col justify-center items-center">
        <div class="w-full h-full bg-hero bg-cover">
          <div class="w-[50%] h-[50%] flex flex-col justify-center items-center">
            <h1 class="w-[60%]" >Discover new worlds, embark on thrilling adventures, and unleash your imagination with Grimwood Games</h1>
          </div>
          <div class="w-[50%] h-[50%] flex flex-col">
            <div class="ml-[20%]">
              <NuxtLink class="text-4xl border-2 rounded-lg p-3 bg-secondary hover:bg-accent hover:text-primary"  to="/newsletter">Subscribe to Newsletter</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-[80%] w-full my-9">
        <h1>News</h1>
        <div v-if="news.length > 0" class="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div v-for="article in news" class="m-2">
           <Card :article="article"/>
          </div>
        </div>
        <div v-if="error">
          <span> No Current News</span>
        </div>
      </div>
      <div class="w-[80%] h-[50%] p-3 flex flex-row justify-center items-start">
        <div class="w-[50%] h-[80%] flex flex-col justify-between items-center bg-adventure bg-cover rounded-xl mx-3">
          <div class="flex flex-col justify-center items-center h-[50%]">
            <div class="flex flex-col justify-center items-center bg-secondary p-3 rounded-xl border-2">
              <h1 class="text-6xl">SUBSCRIBE</h1>
              <p>TO OUR</p>
              <h1>NEWSLETTER</h1>
            </div>
          </div>
          <div class="flex flex-col justify-start items-center w-full h-[50%]">
            <NuxtLink class="text-4xl border-2 rounded-lg p-3 bg-secondary hover:bg-accent hover:text-primary"  to="/newsletter">Sign Up Here</NuxtLink>
          </div>
        </div>
        <div class="w-[50%] h-[80%] bg-secondary rounded-lg">
          <NewsletterLaptop class="w-full"/>
        </div>
      </div>
      <div class="md:w-[80%] w-full my-5">
        <h1>Weekly Stream Schedule</h1>
        <div class="w-full grid lg:grid-cols-7 sm:grid-cols-3 grid-cols-1">
          <div v-for="day in schedule">
            <div class="border-2">
              <div class="flex flex-col justify-center items-center bg-secondary"><h2>{{ day.day }}</h2></div>
              <hr />
              <div v-if="day.events.length > 0" class="h-[10ch] flex flex-col justify-center items-center">
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

</style>

