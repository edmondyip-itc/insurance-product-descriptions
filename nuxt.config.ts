export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/insurance-product-descriptions/' : '/',
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
