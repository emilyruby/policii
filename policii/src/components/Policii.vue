<template>
  <div>
    <h1 id="title">{{ msg }}</h1>
    <policies :activated="active" :heading="title"></policies>
    <categories v-on:active="activate($event)"></categories>
  </div>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Policies from '@/components/Policies.vue'
import { mapState } from 'vuex'

export default {
  name: 'policii',
  components: {
    Categories,
    Policies
  },
  computed: {
    heading: state => state.heading,
    active: state => state.active
  },
  methods: {
    activate (event) {
      this.update({
        title: event.currentTarget.id,
        active: !active,
      })
    },
    ...mapMutations([
      'update',
    ]),
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
