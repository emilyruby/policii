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
  import { mapGetters } from 'vuex'

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
    computed: {
      ...mapGetters({
        heading: 'heading'
      })
    }
  }
</script>

<style scoped>

</style>
