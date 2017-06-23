<template>
  <div>
    <h1 id="title">policii</h1>
    <policies :activated="active" :heading="heading"></policies>
    <categories v-on:active="activate($event)"></categories>
  </div>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Policies from '@/components/Policies.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'policii',
  components: {
    Categories,
    Policies
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
  body {
    font-family: 'Roboto Mono', monospace;
    color: #000000;
  }

  #title {
    font-size: 75px;
    font-weight: 600;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
