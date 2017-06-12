<template>
  <div>
    <policies></policies>
    <h1 id="title">{{ msg }}</h1>
    <categories></categories>
  </div>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Policies from '@/components/Policies.vue'

export default {
  name: 'policii',
  components: {
    Categories,
    Policies
  },
  data () {
    return {
      msg: 'policii'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    font-family: 'Roboto Mono', monospace;
    color: #000000;
  }

  #title {
    font-size: 65px;
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
