<template>
  <div class="container">
    <category title="Environment" image="🌳"></category>
    <category title="Healthcare" image="🏥"></category>
    <category title="Education" image="📚"></category>
    <category title="Defence" image="🏰"></category>
    <category title="Brexit" image="🇪🇺"></category>
    <category title="Economy" image="💰"></category>
    <category title="Social Care" image="🎗️"></category>
    <category title="Business" image="👔"></category>
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
