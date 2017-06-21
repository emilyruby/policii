<template>
  <div>
    <ul>
      <li>Introduce mental health awareness training within the public sector.</li>

      <li>Bring mental health care in line with physical health care through
        local support networks.</li>

      <li>Ensure that every child with <code>Special Educational Needs</code> or Disability
        has access to mainstream education, in accordance with the <code>UN
          Convention for Persons with Disabilities</code>.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Disabilities',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green disabilities updated')
    }
  }
</script>

<style scoped>

</style>
