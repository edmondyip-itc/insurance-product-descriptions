<template>
  <div class="card" v-if="product">
    <div class="meta">
      <small>Product key: <strong>{{ product.key }}</strong></small>
    </div>
    <article class="entry">
      <div class="entry-header">
        <h3 class="entry-title">{{ product.label }}</h3>
      </div>
      <div class="entry-body">
        <p>{{ product.description || 'No description available.' }}</p>
      </div>
    </article>
    <article class="entry">
      <div class="entry-header"><h3 class="entry-title">Declarations</h3></div>
      <div class="entry-body">
        <ul>
          <li v-for="d in product.declarations" :key="d">{{ d }}</li>
          <li v-if="!(product.declarations || []).length">None.</li>
        </ul>
      </div>
    </article>
    <article class="entry">
      <div class="entry-header"><h3 class="entry-title">Eligibility considerations</h3></div>
      <div class="entry-body">
        <ul>
          <li v-for="e in product.eligibility_considerations" :key="e">{{ e }}</li>
          <li v-if="!(product.eligibility_considerations || []).length">None.</li>
        </ul>
      </div>
    </article>
  </div>
  <p v-else class="loading">No product selected.</p>
</template>

<script setup>
defineProps({ product: { type: Object, default: null } })
</script>

<!-- rely on global styles in assets/css/main.css for layout and visuals -->
