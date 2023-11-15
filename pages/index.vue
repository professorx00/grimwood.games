<template>
    <div class="flex flex-col justify-center items-center bg-primary_m ">
      <div class="hero min-h-screen" style="background-image: url('/imagination.jpg')">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-6xl">
            <h1 class="mb-10 text-5xl font-bold">Welcome to Grimwood Games</h1>
            <p class="mb-10 text-2xl">At Grimwood Games, we believe in building not just games, but communities. Join fellow adventurers in exploring this rich, ever-evolving universe. Share your tales, strategies, and artwork. Become part of a growing family of gamers who live for the thrill of adventure and the joy of storytelling.</p>
            <NuxtLink class="text-4xl text-center  mt-3 border-2 rounded-lg p-3 bg-secondary_m hover:bg-accent_m hover:text-primary_m"  to="https://discord.gg/MEycW8uBPX" >Join Our Discord <i class="bi bi-discord md:text-5xl text-3xl"></i></NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="w-full my-9 flex flex-col justify-center items-center  ">  
        <div class="w-full text-left ml-14">
          <h1 class="ml-6">News</h1>
        </div>
        <div class="w-full my-9 flex md:flex-row flex-col justify-center items-center">
          <div class="card w-96 bg-secondary_m shadow-xl m-11">
            <figure><img src="~/assets/images/LongWinter.jpg" alt="GrimwoodCity" /></figure>
            <div class="card-body">
              <h2 class="card-title">New Season of Grimwood City</h2>
              <NuxtLink class="lg:text-4xl md:text-2xl text-xl border-2 rounded-lg p-3 bg-secondary_m hover:bg-accent_m hover:text-primary_m mt-4"  to="http://www.twitch.tv/grimwood_games">Watch on Twitch</NuxtLink>
            </div>
          </div>
          <div class="card w-96 bg-secondary_m shadow-xl m-11">
            <figure><img src="https://www.scabard.com/user/professorx00/image/grimwood_games_Perched_on_the_edge_of_the_enigmatic_bay_the_cit_2f94bce9-d9a7-4670-95a5-3bdbc21f05b5-2.png" alt="new_ravenloft" /></figure>
            <div class="card-body">
              <h2 class="card-title">New Show!</h2>
              <p>Hey All, We started a new show on twitch. Every other sunday at 8pm. It's using City of Mist rule set</p>
              <NuxtLink class="lg:text-4xl md:text-2xl text-xl border-2 rounded-lg p-3 bg-secondary_m hover:bg-accent_m hover:text-primary_m mt-4"  to="http://www.twitch.tv/grimwood_games">Watch on Twitch</NuxtLink>
            </div>
          </div>
          <div class="card w-96 bg-secondary_m shadow-xl m-11">
            <figure><img src="../assets/images/break_free.jpg" alt="layout"/></figure>
            <div class="card-body">
              <h2 class="card-title">Early Preview</h2>
              <p>Here's a preview of what the Grimwood City Book layout might look like.</p>
              <NuxtLink class="lg:text-4xl md:text-2xl text-xl border-2 rounded-lg p-3 bg-secondary_m hover:bg-accent_m hover:text-primary_m mt-4"  to="/preview">Take a look</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full my-5 flex flex-col justify-center items-center">
        <div class="text-left w-full">
          <h1 class="ml-6">Weekly Stream Schedule</h1>
          <h4 class="ml-16">All Times are in Eastern Time Zone</h4>
        </div>
        <div class="w-[90%] m-6 grid lg:grid-cols-7 sm:grid-cols-2 grid-cols-1">
          <div v-for="day in schedule">
            <div class="border-2">
              <div class="flex flex-col justify-center items-center bg-secondary_m"><h2>{{ day.day }}</h2></div>
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
      <div class="hero min-h-screen bg-secondary_m ">
      <div class="hero-content flex-col lg:flex-row">
        <img src="../assets/images/adventure.jpg" class="md:max-w-6xl max-w-md rounded-lg shadow-2xl" />
        <div class="flex flex-col justify-center">
           <div class="flex flex-row mb-7">
                <h1 class="text-5xl">WATCH</h1>
                <span class="text-2xl"> US ON </span>
                <h1 class="text-4xl">TWITCH</h1>
                <br/>
            </div>
          <NuxtLink class="text-4xl text-center border-2 rounded-lg p-3 bg-secondary_m hover:bg-accent_m hover:text-primary_m"  to="https://www.twitch.tv/grimwood_games" >Twitch <i class="bi bi-twitch md:text-5xl text-3xl"></i></NuxtLink>
            <div class="flex flex-row mt-5 mb-4">
                <h1 class="text-5xl">JOIN</h1>
                <span class="text-2xl"> OUR </span>
                <h1 class="text-4xl">Discord</h1>
                <br/>
            </div>
          <NuxtLink class="text-4xl text-center border-2 rounded-lg bg-secondary_m hover:bg-accent_m hover:text-primary_m p-3"   to="https://discord.gg/MEycW8uBPX" >Discord <i class="bi bi-discord md:text-5xl text-3xl"></i></NuxtLink>
        </div>
      </div>
    </div>
      <!-- <div class="w-full h-[50%] p-3 flex md:flex-row flex-col justify-center items-start">
        <div class="lg:w-[50%] w-full h-full flex flex-col justify-around items-center bg-adventure bg-cover rounded-xl m-3">
        </div>
        <div class="lg:w-[50%] h-full w-full bg-secondary_m rounded-lg m-4 flex flex-row justify-center items-center">
            <div class="m-6 flex flex-col justify-center">
              <div class="flex flex-row">
                <h1 class="text-5xl">JOIN</h1>
                <span class="text-2xl  ml-2 mr-2">OUR</span>
                <h1 class="text-4xl">DISCORD</h1>
                <br/>
              </div>
              <NuxtLink class="text-4xl text-center  mt-3 border-2 rounded-lg p-3 bg-secondary_m hover:bg-accent_m hover:text-primary_m"  to="https://discord.gg/MEycW8uBPX" >Discord <i class="bi bi-discord md:text-5xl text-3xl"></i></NuxtLink>
            </div>
             <div class="m-6 flex flex-col justify-center">
              <div class="flex flex-row">
                <h1 class="text-5xl">WATCH</h1>
                <span class="text-2xl ml-2 mr-2"> US ON </span>
                <h1 class="text-4xl">TWITCH</h1>
                <br/>
              </div>
              <NuxtLink class="text-4xl text-center mt-3 border-2 rounded-lg p-3 bg-secondary_m hover:bg-accent_m hover:text-primary_m"  to="https://www.twitch.tv/grimwood_games" >Twitch <i class="bi bi-twitch md:text-5xl text-3xl"></i></NuxtLink>
            </div>
          </div>
      </div> -->
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
    events:[ { title:"City of Mist every other Sunday",
      time: useFormatTime('1/1/2023 08:00:00 PM')}]
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
    events:[{
      title:"Actual Play of Grimwood City: Long Winter Night Campaign",
      time: useFormatTime('1/1/2023 08:00:00 PM')
    }]
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

