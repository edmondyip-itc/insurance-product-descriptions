export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/insurance-product-descriptions/',
    head: {
      title: 'Insurance Product Descriptions'
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    },
    outDir: 'docs'
  }
})
