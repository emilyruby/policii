<template>
  <div>
    <ul>
      <li>Roll back privatisation of the NHS, to ensure that all health and dental
        services are always publicly provided and funded - and free at the point
        of access - through the introduction of an <code>NHS Reinstatement Act</code>.</li>

      <li>Scrap NHS <code>Sustainability and Transformation Plans</code>.</li>

      <li>Close the NHS spending gap and provide an immediate cash injection.</li>

      <li>Provide greater access to free condoms and sexual health clinics.</li>
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
