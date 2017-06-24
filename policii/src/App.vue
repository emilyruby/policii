<template>
  <div id="app">
    <navbar></navbar>
    <policii id="policii"></policii>
  </div>
</template>

<script>
import Policii from './components/Policii.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Policii,
    Navbar
  }
}
</script>

<style scoped>
  #app {
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    font-family: 'Roboto Mono', monospace;
  }

  #policii {
    padding-top: 40px;
  }
</style>
