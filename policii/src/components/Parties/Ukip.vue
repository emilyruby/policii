<template>
  <div>
    <brexit :heading="heading" v-show="title === 'brexit'"></brexit>
    <disabilities :heading="heading" v-show="title === 'disabilities'"></disabilities>
    <diverse :heading="heading" v-show="title === 'diverse'"></diverse>
    <economy :heading="heading" v-show="title === 'economy'"></economy>
    <education :heading="heading" v-show="title === 'education'"></education>
    <environment :heading="heading" v-show="title === 'environment'"></environment>
    <foreign :heading="heading" v-show="title === 'foreign'"></foreign>
    <healthcare :heading="heading" v-show="title === 'healthcare'"></healthcare>
    <housing :heading="heading" v-show="title === 'housing'"></housing>
    <industry :heading="heading" v-show="title === 'industry'"></industry>
    <infrastructure :heading="heading" v-show="title === 'infrastructure'"></infrastructure>
    <local :heading="heading" v-show="title === 'local'"></local>
    <security :heading="heading" v-show="title === 'security'"></security>
    <social :heading="heading" v-show="title === 'social'"></social>
  </div>
</template>

<script>
  import Brexit from '@/components/Policies/Ukip/Brexit.vue'
  import Disabilities from '@/components/Policies/Ukip/Disabilities.vue'
  import Diverse from '@/components/Policies/Ukip/Diverse.vue'
  import Economy from '@/components/Policies/Ukip/Economy.vue'
  import Education from '@/components/Policies/Ukip/Education.vue'
  import Environment from '@/components/Policies/Ukip/Environment.vue'
  import Foreign from '@/components/Policies/Ukip/Foreign.vue'
  import Healthcare from '@/components/Policies/Ukip/Healthcare.vue'
  import Housing from '@/components/Policies/Ukip/Housing.vue'
  import Industry from '@/components/Policies/Ukip/Industry.vue'
  import Infrastructure from '@/components/Policies/Ukip/Infrastructure.vue'
  import Local from '@/components/Policies/Ukip/Local.vue'
  import Security from '@/components/Policies/Ukip/Security.vue'
  import Social from '@/components/Policies/Ukip/Social.vue'

  export default {
    name: 'Ukip',
    components: {
      Brexit,
      Disabilities,
      Diverse,
      Economy,
      Education,
      Environment,
      Foreign,
      Healthcare,
      Housing,
      Industry,
      Infrastructure,
      Local,
      Security,
      Social
    },
    props: {
      heading: ''
    },
    computed: {
      title: function () {
        return this.heading.split(' ')[0]
      }
    }
  }
</script>

<style scoped>

</style>
