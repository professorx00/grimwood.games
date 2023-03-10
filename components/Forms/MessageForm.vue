<template>
    <div class=" w-[80%] flex flex-col p-2 bg-primary_light">
    <VForm :validation-schema="schema"
          :initial-values="initialValues"
          @submit="handleSubmit" 
          v-slot="{meta, values}"
          >
        <FormsVTextInput name="email" placeholder="Email" type="email" label="Email"/>
        <FormsVTextInput name="name" placeholder="Full Name" type="text" label="Full Name"/>
        <FormsVTextArea name="message" placeholder="Message" label="Message"/>
        <div class="w-full flex flex-row px-36 items-center justify-end"><FormsButton title="Send Message" :disabled="!meta.valid" /></div>
    </VForm>
    </div>
</template>

<script setup>
import * as yup from 'yup'
import { configure, useForm } from 'vee-validate';


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
    action.resetForm()
}
</script>

<style lang="scss" scoped>

</style>