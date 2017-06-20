<template>
  <div>
    <ul>
      <li>Publish a strategy for protecting civilians in conflict.</li>

      <li>Immediately recognise the State of Palestine.</li>

      <li>Review all training and equipment contracts with repressive regimes, to ensure
        that Britain never colludes with the mistreatment of civilians.</li>

      <li>Introduce standards of Service Accommodation.</li>

      <li>In the first 100 days, produce a cross-departmental strategy to meet our
        international obligations on the refugee crisis.</li>

      <li>Establish a centre for <code>Universal Health Coverage</code></li>
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
