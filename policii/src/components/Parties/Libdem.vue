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
  import Brexit from '@/components/Policies/Libdem/Brexit.vue'
  import Disabilities from '@/components/Policies/Libdem/Disabilities.vue'
  import Diverse from '@/components/Policies/Libdem/Diverse.vue'
  import Economy from '@/components/Policies/Libdem/Economy.vue'
  import Education from '@/components/Policies/Libdem/Education.vue'
  import Environment from '@/components/Policies/Libdem/Environment.vue'
  import Foreign from '@/components/Policies/Libdem/Foreign.vue'
  import Healthcare from '@/components/Policies/Libdem/Healthcare.vue'
  import Housing from '@/components/Policies/Libdem/Housing.vue'
  import Industry from '@/components/Policies/Libdem/Industry.vue'
  import Infrastructure from '@/components/Policies/Libdem/Infrastructure.vue'
  import Local from '@/components/Policies/Libdem/Local.vue'
  import Security from '@/components/Policies/Libdem/Security.vue'
  import Social from '@/components/Policies/Libdem/Social.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Libdem',
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
