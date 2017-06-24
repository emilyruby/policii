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
    display: flex;
    position: relative;
  }
</style>
