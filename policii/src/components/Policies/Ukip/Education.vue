<template>
  <div>
    <ul>
      <li>Make specialist counselling services available in all secondary schools.</li>

      <li>Introduce emotional health and wellbeing into the Ofsted inspection framework.</li>

      <li>Abolish <code>Key Stage 1 SATs</code>.</li>

      <li>Require every primary school to nominate a science leader.</li>

      <li>Open a grammar school in every town.</li>

      <li>Stop paying tuition fees for courses which do not lead to at least two thirds
        of students into a graduate level job.</li>

      <li>Extend the primary school day by offering wrap-around childcare from 8am to
        6pm during term time.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Education',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green education updated')
    }
  }
</script>

<style scoped>

</style>
