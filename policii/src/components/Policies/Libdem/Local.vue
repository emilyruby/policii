<template>
  <div>
    <ul>
      <li>Extend the Equality Act to all large companies with more than 250 employees,
        requiring them to monitor and publish data on gender, BAME, and LGBT+
        employment levels and pay gaps.</li>

      <li>Set up a £2 billion <code>Rural Services Fund</code> of capital investment to enable
        communities to establish a local base from which to co-locate services such
        as council offices, post offices, children’s centres, libraries and visiting
        healthcare professionals.</li>

      <li>Reduce the proliferation of betting shops and capping the maximum amount able
        to be bet on fixed odds betting terminals (FOBTs) at one time to £2.</li>
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
      console.log('green local updated')
    }
  }
</script>

<style scoped>

</style>
