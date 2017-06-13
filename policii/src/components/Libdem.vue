<template>
  <div>
    {{title}}
  </div>
</template>

<script>
  export default {
    name: 'Libdem',
    props: {
      title: {type: String, default: 'Hello'}
    },
    data: function () {
      return {
        active: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
