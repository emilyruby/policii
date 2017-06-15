<template>
  <div id="policies" v-html="content">
  </div>
</template>

<script>
  export default {
    name: 'Conservative',
    data: function () {
      return {
        html: ''
      }
    },
    props: [
      'heading'
    ],
    computed: {
      content: function () {

      }
    }
  }
</script>

<style scoped>

</style>
