<template>
  <div class="container">
    <div v-on:click="activate($event)" id="environment & animal cruelty">
      <category title="environment & animal cruelty" image="🌳"></category>
    </div>

    <div v-on:click="activate($event)" id="healthcare">
      <category title="healthcare" image="🏥"></category>
    </div>

    <div v-on:click="activate($event)" id="education & childcare">
      <category title="education & childcare" image="📚"></category>
    </div>

    <div v-on:click="activate($event)" id="security & defence">
      <category title="security & defence" image="🏰"></category>
    </div>

    <div v-on:click="activate($event)" id="brexit">
      <category title="brexit" image="🇪🇺"></category>
    </div>

    <div v-on:click="activate($event)" id="economy & democracy">
      <category title="economy & democracy" image="💰"></category>
    </div>

    <div v-on:click="activate($event)" id="social care and security">
      <category title="social care and security" image="🎗️"></category>
    </div>

    <div v-on:click="activate($event)" id="local communities">
      <category title="local communities" image="🏙"></category>
    </div>

    <div v-on:click="activate($event)" id="infrastructure">
      <category title="infrastructure" image="🚂"></category>
    </div>

    <div v-on:click="activate($event)" id="industry">
      <category title="industry" image="🏭"></category>
    </div>

    <div v-on:click="activate($event)" id="housing">
      <category title="housing" image="🏡"></category>
    </div>

    <div v-on:click="activate($event)" id="diverse & cultured communities">
      <category title="diverse & cultured communities" image="🌈"></category>
    </div>

    <div v-on:click="activate($event)" id="disabilities and mental health">
      <category title="disabilities and mental health" image="♿️"></category>
    </div>

    <div v-on:click="activate($event)" id="foreign policy">
      <category title="foreign policy" image="🌍️"></category>
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'categories',
  components: {
    Category
  },
  computed: {
    ...mapGetters({
      heading: 'heading',
      active: 'active'
    })
  },
  methods: {
    activate (event) {
      this.update({
        title: event.currentTarget.id,
        active: !this.active
      })
    },
    ...mapMutations([
      'update'
    ])
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    align-items: flex-start;
  }
</style>
