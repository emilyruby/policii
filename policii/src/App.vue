<template>
  <div id="app">
    <policii></policii>
  </div>
</template>

<script>
import Policii from './components/Policii.vue'

export default {
  name: 'app',
  components: {
    Policii
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
</style>
