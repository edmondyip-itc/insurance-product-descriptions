export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/',
    head: {
      title: 'Insurance Product Descriptions'
    }
  },
  nitro: {
    preset: 'static',
    outDir: 'docs'
  }
})
