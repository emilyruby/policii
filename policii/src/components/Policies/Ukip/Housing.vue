<template>
  <div>
    <ul>
      <li>Encourage the <code>Buy British</code> campaign.</li>

      <li>Establish a <code>Housing Development Corporation</code> to acquire primarily brownfield
        sites where affordable housing is required.</li>

      <li>Change planning law to enable the <code>HDC</code> to give themselves planning permission
        to build between 10 and 100 FBM homes on an average site.</li>

      <li>Identify long term dormant land held by central and local government and
        release it for affordable development.</li>

      <li>Enforce a law stating that veterans must be offered homes, and build 8 halfway
        house veterans' hostels, each with 200 rooms.</li>

      <li>Assign 500 affordable rent homes every year to ex-forces personnel.</li>
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
      console.log('ukip housing updated')
    }
  }
</script>

<style scoped>

</style>
