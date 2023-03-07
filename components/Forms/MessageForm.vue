<template>
    <div class=" w-[80%] flex flex-col p-6 bg-primary_light">
    <VForm :validation-schema="schema"
          :initial-values="initialValues"
          @submit="handleSubmit" >
        <FormsVTextInput name="email" placeholder="email" type="email" label="Email"/>
        <FormsVTextInput name="password" placeholder="password" type="password" label="Password" />
        <button type="submit">Submit</button>
    </VForm>
    </div>
</template>

<script setup>
import * as yup from 'yup'
import { configure } from 'vee-validate';
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

let schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})
const initialValues = { email: "", password: "" };
const handleSubmit = (values, action)=>{
    console.log(values)
}
</script>

<style lang="scss" scoped>

</style>