<template>
  <div v-html="content">
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
        const showdown = require('showdown')
        const converter = new showdown.Converter()
        const text = '#hello, markdown!'
        const html = converter.makeHtml(text)
        return html
      }
    }
  }
</script>

<style scoped>

</style>
