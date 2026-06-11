import { ref, computed } from 'vue'

export const useProducts = () => {
  const products = ref([])
  const selectedKey = ref(null)
  const pageTitle = ref('Products')

  async function loadProducts() {
    const res = await $fetch('/insurance-products.json')
    products.value = res
    products.value.sort((a, b) => a.label.localeCompare(b.label))
    if (!selectedKey.value) selectedKey.value = products.value[0]?.key || null
    updateTitle()
  }

  function updateTitle() {
    const p = products.value.find((p) => p.key === selectedKey.value)
    pageTitle.value = p ? p.label : 'No results'
  }

  function select(key) {
    selectedKey.value = key
    updateTitle()
  }

  function getProductByKey(key) {
    return products.value.find((p) => p.key === key)
  }

  function formatLabel(v) {
    return v || 'No description available.'
  }

  function filter(query) {
    const q = (query || '').trim().toLowerCase()
    if (!q) return products.value
    return products.value.filter((p) => {
      return (
        (p.key || '').toLowerCase().includes(q) ||
        (p.label || '').toLowerCase().includes(q) ||
        ((p.description || '')).toLowerCase().includes(q)
      )
    })
  }

  const currentProduct = computed(() => products.value.find((p) => p.key === selectedKey.value) || null)

  return {
    products,
    selectedKey,
    pageTitle,
    loadProducts,
    select,
    getProductByKey,
    formatLabel,
    filter,
    currentProduct
  }
}
