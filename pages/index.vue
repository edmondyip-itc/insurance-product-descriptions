<template>
  <div class="container">
    <aside class="sidebar">
      <input v-model="search" placeholder="Search products" class="search" />
      <ProductMenu
        :products="filtered"
        :selectedKey="selectedKey"
        @select="select"
      />
    </aside>

    <main class="content">
      <h1>{{ pageTitle }}</h1>
      <ProductDetail :product="currentProduct" />
    </main>
  </div>
</template>

<script setup>
// Version: 2025-06-11-v3 (cache bust)
import { ref, computed, watch, onMounted } from 'vue'
import ProductMenu from '~/components/ProductMenu.vue'
import ProductDetail from '~/components/ProductDetail.vue'
import { useProducts } from '~/composables/useProducts'

const { products, selectedKey, pageTitle, loadProducts, select, filter, currentProduct } = useProducts()
const search = ref('')

const filtered = computed(() => filter(search.value))

watch(filtered, (next) => {
  if (!next.length) {
    // clear selection when no results
    select(null)
    return
  }
  // select first result when the list changes
  select(next[0].key)
})

onMounted(() => {
  loadProducts().catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Failed to load products', err)
  })
})
</script>

<style scoped>
.search{width:100%;padding:8px;margin-bottom:12px}
</style>
