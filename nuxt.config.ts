// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [],
  css: ["assets/index.css","assets/reset.css"],
  app: {
    head: {
      // charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'CV Nefedyev Andrey',
      meta: [
        { name: 'cv', content: 'cv' }
      ],
    },
  },
  // plugins: ['~/plugins/outside.client.js']
})

