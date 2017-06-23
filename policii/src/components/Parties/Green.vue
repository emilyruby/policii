<template>
  <div>
    <brexit v-show="heading === 'brexit'"></brexit>
    <disabilities v-show="heading === 'disabilities'"></disabilities>
    <diverse v-show="heading === 'diverse'"></diverse>
    <economy v-show="heading === 'economy'"></economy>
    <education v-show="heading === 'education'"></education>
    <environment v-show="heading === 'environment'"></environment>
    <foreign v-show="heading === 'foreign'"></foreign>
    <healthcare v-show="heading === 'healthcare'"></healthcare>
    <housing v-show="heading === 'housing'"></housing>
    <industry v-show="heading === 'industry'"></industry>
    <infrastructure v-show="heading === 'infrastructure'"></infrastructure>
    <local v-show="heading === 'local'"></local>
    <security v-show="heading === 'security'"></security>
    <social v-show="heading === 'social'"></social>
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
