<template>
  <ul class="nav-list">
    <li v-for="(product, idx) in products" :key="product.key">
      <a href="#" :class="['nav-item', { active: product.key === selectedKey }]" @click.prevent="onSelect(product.key)">
        <span class="nav-copy">
          <span class="title">{{ product.label }}</span>
          <small class="subtitle">{{ product.key }}</small>
        </span>
      </a>
    </li>
    <li v-if="!products.length" class="loading">None.</li>
  </ul>
</template>

<script setup>
defineProps({
  products: { type: Array, default: () => [] },
  selectedKey: { type: String, default: null }
})
const emit = defineEmits(['select'])
const onSelect = (key) => emit('select', key)
</script>
