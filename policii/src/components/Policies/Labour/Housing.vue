<template>
  <div>
    <ul>
      <li>Guarantee <code>Help to Buy</code> funding until 2027.</li>

      <li>Make new 3-year tenancies the norm, with an inflation cap on rent prices.</li>

      <li>Legislate to ban letting agency fees for tenants.</li>

      <li>Introduce new legal minimum standards to ensure properties are <code>fit for human
        habitation</code>.</li>

      <li>Reintroduce housing benefits for 18-21 year olds.</li>

      <li>Remove government restrictions to stop councils from building homes and begin
        a council building program.</li>

      <li>Make 4000 additional homes available to those with a history of rough sleeping.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Housing',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green housing updated')
    }
  }
</script>

<style scoped>

</style>
