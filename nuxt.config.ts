// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // ...
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@formkit/nuxt",
    "nuxt-gtag",
    "nuxt-svgo",
  ],
  build: { transpile: ["luxon", "@vee-validate/rules"] },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  gtag: {
    id: "G-45MLS5FM2D",
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      emailjs: "1BaZwEOc51HCUmYi-",
    },
  },
});
