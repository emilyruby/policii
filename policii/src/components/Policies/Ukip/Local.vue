<template>
  <div>
    <ul>
      <li>Exempt foodbanks and charity shops from charges imposed by local authorities
        to dispose of unwanted food waste and other goods.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Local',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('ukip local updated')
    }
  }
</script>

<style scoped>

</style>
