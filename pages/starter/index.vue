<template>
    <div class="flex flex-col items-center justify-center w-11/12">
        <div role="alert" class="alert alert-success m-6" v-if="alertSuccess">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Please check your email for the file!</span>
        </div>
        <FormKit type="form" :value="formValues" form-class="flex flex-col items-center justify-center" :actions="false" id="starter" @submit="submitForm">
            <img src="/starter.png" alt="Quick Start Guide" class="w-1/2 m-8"/>
            <h1>Get your free quick starter guide</h1>
            <FormKit
            type="text"
            name="name"
            label="Your name"
            placeholder="Jane Doe"
            validation="required"
            :disabled="alertSuccess"
            :classes="{
                outer: 'w-8/12',
                input:'input input-bordered flex items-center gap-2 text-BlueBlack m-3 w-full',
                message: 'text-xl text-red-600',
                label: 'text-xl'
            }"
            />
            <FormKit
                type="email"
                name="email"
                label="Email Address"
                validation="required|email"
                validation-visibility="live"
                :disabled="alertSuccess"
                placeholder="example@grimwood.games"
                :classes="{
                    outer: 'w-8/12',
                    input:'input input-bordered flex items-center gap-2 text-BlueBlack m-3 w-full',
                    message: 'text-xl text-red-600',
                    label: 'text-xl'
                }"
            />
            <FormKit type="submit" :classes="{input:'btn bg-secondary_m hover:bg-accent_m hover:text-primary_m btn-xs sm:btn-sm md:btn-md lg:btn-lg m-5'}" :disabled="alertSuccess">Get Your Free Quick Guide</FormKit>
        </Formkit>
        
    </div>
</template>
<script setup>
import emailjs from '@emailjs/browser'
const config = useRuntimeConfig();
const router = useRouter();

emailjs.init({
        publicKey: config.public.emailjs,
      })
const alertSuccess = ref(false)

const formValues = ref({
    name: '',
    email: ''
})

const submitForm = async (data)=>{
    const res = await emailjs.send('default_service','template_x0qcb44',{to_name: data.name, to_email: data.email});
    if(res && res.status){
        alertSuccess.value = true
        setTimeout(()=>{
            router.push('/')
        }, 2500)
    }
}

</script>