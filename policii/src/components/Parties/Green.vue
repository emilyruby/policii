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
  import Brexit from '@/components/Policies/Green/Brexit.vue'
  import Disabilities from '@/components/Policies/Green/Disabilities.vue'
  import Diverse from '@/components/Policies/Green/Diverse.vue'
  import Economy from '@/components/Policies/Green/Economy.vue'
  import Education from '@/components/Policies/Green/Education.vue'
  import Environment from '@/components/Policies/Green/Environment.vue'
  import Foreign from '@/components/Policies/Green/Foreign.vue'
  import Healthcare from '@/components/Policies/Green/Healthcare.vue'
  import Housing from '@/components/Policies/Green/Housing.vue'
  import Industry from '@/components/Policies/Green/Industry.vue'
  import Infrastructure from '@/components/Policies/Green/Infrastructure.vue'
  import Local from '@/components/Policies/Green/Local.vue'
  import Security from '@/components/Policies/Green/Security.vue'
  import Social from '@/components/Policies/Green/Social.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Green',
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
    computed: {
      ...mapGetters({
        heading: 'heading'
      })
    }
  }
</script>

<style scoped>

</style>
