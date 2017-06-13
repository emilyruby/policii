<template>
  <div class="container">
    <div v-on:click="active = !active">
      <category title="environment & animal cruelty" image="🌳"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="healthcare" image="🏥"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="education & childcare" image="📚"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="security & defence" image="🏰"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="brexit" image="🇪🇺"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="economy & democracy" image="💰"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="social care and security" image="🎗️"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="local communities" image="🏙"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="infrastructure" image="🚂"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="industry" image="🏭"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="housing" image="🏡"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="diverse & cultured communities" image="🌈"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="disabilities and mental health" image="♿️"></category>
    </div>

    <div v-on:click="active = !active">
      <category title="foreign policy" image="🌍️"></category>
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'categories',
  components: {
    Category
  },
  data: function () {
    return {
      active: false
    }
  },
  watch: {
    active: {
      handler: function () {
        this.$emit('active')
      },
      deep: true
    }
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
