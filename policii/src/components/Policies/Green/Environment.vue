<template>
  <div>
    <ul>
      <li>Introduce an <code>Environmental Protection Act</code> to safeguard and restore
        our environment.</li>

      <li>A public works programme of insulation to ensure every home is insulated.</li>

      <li>Invest in flood defenses and natural flood management.</li>

      <li>Equality of access to nature and green spaces.</li>

      <li>Limit global temperature increases to well below 2 degrees- aiming for
        2.5 degrees.</li>

      <li>Introduce a one-off fine on car manufacturers who cheated the emissions
        testing regime.</li>

      <li>Create a new <code>Clean Air Act</code> which would expand and fund a clean air
        zone network.</li>

      <li>Protection for the <code>Green Belt</code>, National Parks, SSSIs and Areas of
        Outstanding Natural Beauty.</li>

      <li>Create a wider, more effective network of marine protected areas around
        our coasts.</li>

      <li>Introduce <code>Deposit Return Schemes</code> with a zero waste target.</li>

      <li>Increase incentives to take diesel vehicles off the roads.</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Environment',
    props: [
      'heading'
    ],
    updated: function () {
      console.log('green environment updated')
    }
  }
</script>

<style scoped>

</style>
