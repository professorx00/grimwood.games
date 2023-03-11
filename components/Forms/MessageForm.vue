<template>
    <div class=" w-[80%] h-[90ch] flex flex-col  justify-center items-center text-center p-2 bg-primary_light" v-if="!messageSent">
    <VForm :validation-schema="schema"
          :initial-values="initialValues"
          @submit="handleSubmit" 
          v-slot="{meta, values}"
          class="w-[80%]">
        <h1 class="text-highlight">Or Send Us A Message</h1>
        <FormsVTextInput name="email" placeholder="Email" type="email" label="Email"/>
        <FormsVTextInput name="name" placeholder="Full Name" type="text" label="Full Name"/>
        <FormsVTextArea name="message" placeholder="Message" label="Message"/>
        <div class="w-full flex flex-row px-36 items-center justify-end"><FormsButton title="Send Message" :disabled="!meta.valid" /></div>
    </VForm>
    </div>
    <div class=" w-[80%] h-[90ch] flex flex-col justify-center items-center p-2 bg-primary_light" v-if="messageSent" >
        <h1 class="text-highlight">Your Message has been sent! Thank you for reaching out to us. </h1>
    </div>
</template>

<script setup>
import * as yup from 'yup'
import { configure, useForm } from 'vee-validate';

const messageSent = ref(false);

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

let schema = yup.object({
    email: yup.string().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please enter a valid email address."),
    name: yup.string().required(),
    message: yup.string().min(20)
})
const initialValues = { email: "", name:"", message:""};
const handleSubmit = (values, action)=>{
    console.log(values)
    const {email, name, message} = values;
    const {data} = useFetch('/api/mail', {
        method: 'POST',
        body: {email, name, message}
    })
    if (data) {
        messageSent.value = true;
    }
}
</script>

<style lang="scss" scoped>

</style>