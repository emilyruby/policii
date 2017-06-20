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
  import Brexit from '@/components/Policies/Labour/Brexit.vue'
  import Disabilities from '@/components/Policies/Labour/Disabilities.vue'
  import Diverse from '@/components/Policies/Labour/Diverse.vue'
  import Economy from '@/components/Policies/Labour/Economy.vue'
  import Education from '@/components/Policies/Labour/Education.vue'
  import Environment from '@/components/Policies/Labour/Environment.vue'
  import Foreign from '@/components/Policies/Labour/Foreign.vue'
  import Healthcare from '@/components/Policies/Labour/Healthcare.vue'
  import Housing from '@/components/Policies/Labour/Housing.vue'
  import Industry from '@/components/Policies/Labour/Industry.vue'
  import Infrastructure from '@/components/Policies/Labour/Infrastructure.vue'
  import Local from '@/components/Policies/Labour/Local.vue'
  import Security from '@/components/Policies/Labour/Security.vue'
  import Social from '@/components/Policies/Labour/Social.vue'

  export default {
    name: 'Labour',
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
    },
    updated: function () {
      console.log('labour updated')
    }
  }
</script>

<style scoped>

</style>
