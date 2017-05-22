<template>
  <div class="symbol">
    {{image}}
  </div>
</template>

<script>
export default {
  name: 'logo',
  props: {
    image: {type: String, default: '*'}
  }
}
</script>

<style>
  .symbol {
    position: relative;
  }
</style>
