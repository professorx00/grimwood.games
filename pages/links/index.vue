<template>
    <div class="flex flex-col justify-center items-center bg-primary_m">
        <IconLogo class="text-[12rem] m-10 bg-white rounded-[100%] flex justify-center items-center text-center" />
        <h1 class="m-4 text-4xl text-Peach">Online Twitch Stream, Game Designer, and Web Developer</h1>
        <div class="w-full h-12 flex flex-row justify-center items-center space-x-4 m-6">
            <a href="https://discord.gg/MEycW8uBPX"><IconDiscord class="md:text-6xl text-4xl text-secondary_m_light hover:text-Peach" /></a>
            <a href="https://twitch.tv/grimwood_games"><IconTwitch class="md:text-6xl text-4xl text-secondary_m_light hover:text-Peach" /></a>
            <a href="https://www.youtube.com/@grimwoodgames"><IconYoutube class="md:text-6xl text-4xl text-secondary_m_light hover:text-Peach" /></a>
            <a href="https://www.facebook.com/profile.php?id=100090535811764&__cft__[0]=AZVou8WiR8ydxDOBiAsskcFniU9JtdGIDzaoB9t7mdZjEIe5GVypK-Qk6FygqOhqbFriIQcGXA7eDy8iPQ12Gn0kyNdgPKUn2Ubr1h30ETkZMKtJJxVwqTHFmg7rhfds9x771DuTFjjAK4KAPBJvouThWjPzg9PZrR9_hcw5HgZHn5UqDTxvF8qHtFUo">
                <IconFacebook class="md:text-6xl text-4xl text-secondary_m_light hover:text-Peach" />
            </a>
            <a href="https://x.com/Grimwood_Games"><IconTwitter class="md:text-6xl text-4xl text-secondary_m_light hover:text-Peach" /></a>
            <a href="https://tiktok.com/@grimwoodgames"><IconTikTok class="md:text-6xl text-4xl text-secondary_m_light hover:text-Peach" /></a>
        </div>
        <div v-for="item in links" class="flex flex-col justify-center items-center w-full">
            <a :href="item.link" class="md:w-1/3 w-10/12 m-6 p-5 flex justify-center items-center rounded-lg border-4 border-Peach hover:bg-secondary_m_light hover:text-gray-900  text-secondary_m_light"> 
                <img v-if="item.image != ''" :src="item.image" width="60px" height="60px" class="md:mr-10 mr-3"/>
                <h2 class="text-2xl">{{item.title}}</h2>
            </a>
        </div>
    </div>
</template>

<script setup>
import IconDiscord from '~/assets/images/discord.svg'
import IconTwitch from '~/assets/images/twitch.svg'
import IconFacebook from '~/assets/images/facebook.svg'
import IconTwitter from '~/assets/images/twitter.svg'
import IconTikTok from '~/assets/images/tik-tok.svg'
import IconYoutube from '~/assets/images/youtube.svg'
import IconLogo from '~/assets/images/Logo_vrt.svg'
definePageMeta({
  layout: false,
});

const links = [
    {
        id:1,
        title: "Backerkit for Ironbound",
        image: "/ironbound_cover.jpg",
        link: "https://www.backerkit.com/call_to_action/92cd4630-e662-4b87-a010-771fb23030ed/email_submitted?has_user_account=false&fbclid=IwAR2Eiq2KMwgyr_BI2_egEupVgoIR4breFW-LfxX9t9J39xDc-GAQIulckoE#success"
    },
    {
        id:2,
        title: "Get Grimwood City for EZD6",
        image: "/FrontCover_Ezd6.jpg",
        link: "https://legacy.drivethrurpg.com/m/product/473873"
    },
    {
        id:3,
        title: "Join the Discord Server for Games, Promotions, and Fun",
        image: "",
        link: "https://discord.gg/MEycW8uBPX"
    },
    {
        id:4,
        title: "Scabard",
        image: "",
        link: "http://www.scabard.com/"
    },
    {
        id:5,
        title: "Merch Store",
        image: "300.jpg",
        link: "https://grimwoodgames.creator-spring.com/"
    }
]
</script>