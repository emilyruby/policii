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
  import Brexit from '@/components/Policies/Conservative/Brexit.vue'
  import Disabilities from '@/components/Policies/Conservative/Disabilities.vue'
  import Diverse from '@/components/Policies/Conservative/Diverse.vue'
  import Economy from '@/components/Policies/Conservative/Economy.vue'
  import Education from '@/components/Policies/Conservative/Education.vue'
  import Environment from '@/components/Policies/Conservative/Environment.vue'
  import Foreign from '@/components/Policies/Conservative/Foreign.vue'
  import Healthcare from '@/components/Policies/Conservative/Healthcare.vue'
  import Housing from '@/components/Policies/Conservative/Housing.vue'
  import Industry from '@/components/Policies/Conservative/Industry.vue'
  import Infrastructure from '@/components/Policies/Conservative/Infrastructure.vue'
  import Local from '@/components/Policies/Conservative/Local.vue'
  import Security from '@/components/Policies/Conservative/Security.vue'
  import Social from '@/components/Policies/Conservative/Social.vue'

  export default {
    name: 'Conservative',
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
