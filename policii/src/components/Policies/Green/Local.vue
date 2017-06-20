<template>
  <div>
    <ul>
      <li>Reject the <code>Prevent</code> strategy.</li>

      <li>Pursue community-led collaborative approaches to tackling all forms of
        extremism instead.</li>

      <li>Protect the BBC.</li>

      <li>Tighten the rules on media ownership so no individual or company owns
        more than 20% of the media market.</li>
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
