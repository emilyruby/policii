<template>
  <div class="container">
    <category title="environment & animal cruelty" image="🌳"></category>
    <category title="healthcare" image="🏥"></category>
    <category title="education & childcare" image="📚"></category>
    <category title="security & defence" image="🏰"></category>
    <category title="brexit" image="🇪🇺"></category>
    <category title="economy & democracy" image="💰"></category>
    <category title="social care and security" image="🎗️"></category>
    <category title="local communities" image="🏙"></category>
    <category title="infrastructure" image="🚂"></category>
    <category title="industry" image="🏭"></category>
    <category title="housing" image="🏡"></category>
    <category title="diverse & cultured communities" image="🌈"></category>
    <category title="disabilities and mental health" image="♿️"></category>
    <category title="foreign policy" image="🌍️"></category>
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
