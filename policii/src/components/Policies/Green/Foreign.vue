<template>
  <div>
    <ul>
      <li>Increase the overseas aid budget from 0.7% of GPD to 1.0% of GDP.</li>

      <li>Implement an immigration and asylum system that recognises and takes
        responsibility for Britain's ongoing role in causing mass migrations
        worldwide.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Foreign',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green foreign updated')
    }
  }
</script>

<style scoped>

</style>
