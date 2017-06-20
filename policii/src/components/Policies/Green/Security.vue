<template>
  <div>
    <ul>
      <li>Cancel <code>Trident</code> replacement.</li>

      <li>End support for aggressive wars of intervention.</li>

      <li>No more arms sales to oppressive regimes.</li>

      <li>Strengthen the global deal on climate change, including by delivering
        climate justice and promoting ecologically sustainable development.</li>

      <li>End the sale of personal data for commercial or other ends.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Security',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green security updated')
    }
  }
</script>

<style scoped>

</style>
