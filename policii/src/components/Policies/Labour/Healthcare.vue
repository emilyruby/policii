<template>
  <div>
    <ul>
      <li>Lay the foundations for a <code>National Care Service</code> for England.</li>

      <li>Increase social care budgets by £8 billion over the lifetime of the next
        parliament.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Healthcare',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green healthcare updated')
    }
  }
</script>

<style scoped>

</style>
