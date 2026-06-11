export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/',
    buildId: `build-${Date.now()}`,
    head: {
      title: 'Insurance Product Descriptions'
    }
  },
  nitro: {
    preset: 'static',
    outDir: 'docs'
  }
})
