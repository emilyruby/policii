<template>
  <div class="container">
    <category title="environment" image="🌳"></category>
    <category title="healthcare" image="🏥"></category>
    <category title="education" image="📚"></category>
    <category title="defence" image="🏰"></category>
    <category title="brexit" image="🇪🇺"></category>
    <category title="economy" image="💰"></category>
    <category title="social care" image="🎗️"></category>
    <category title="business" image="👔"></category>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'categories',
  components: {
    Category
  },
  props: {
    title: {type: String, default: 'Category'},
    image: {type: String, default: '*'}
  }
}

</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    align-items: flex-start;
  }
</style>
