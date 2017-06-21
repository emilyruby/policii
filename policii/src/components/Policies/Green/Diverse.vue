<template>
  <div>
    <ul>
      <li>Implement a UK-wide strategy to tackle gender-based violence, including
        domestic violence, rape and sexual abuse, FGM and trafficking.</li>

      <li>Action to tackle racism and discrimination on the basis of faith,
        disability, real equality for LGBTIQA+ people, equal rights for mixed
        gender couples to have Civil Partnership.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Diverse',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green diverse updated')
    }
  }
</script>

<style scoped>

</style>
