<template>
  <div>
    <brexit v-show="heading === 'brexit'" :heading="heading"></brexit>
    <disabilities v-show="heading === 'disabilities'" :heading="heading"></disabilities>
    <diverse v-show="heading === 'diverse'" :heading="heading"></diverse>
    <economy v-show="heading === 'economy'" :heading="heading"></economy>
    <education v-show="heading === 'education'" :heading="heading"></education>
    <environment v-show="heading === 'environment'" :heading="heading"></environment>
    <foreign v-show="heading === 'foreign'" :heading="heading"></foreign>
    <healthcare v-show="heading === 'healthcare'" :heading="heading"></healthcare>
    <housing v-show="heading === 'housing'" :heading="heading"></housing>
    <industry v-show="heading === 'industry'" :heading="heading"></industry>
    <infrastructure v-show="heading === 'infrastructure'" :heading="heading"></infrastructure>
    <local v-show="heading === 'local'" :heading="heading"></local>
    <security v-show="heading === 'security'" :heading="heading"></security>
    <social v-show="heading === 'social'" :heading="heading"></social>
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
  import { mapGetters } from 'vuex'

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
    computed: {
      ...mapGetters({
        heading: 'heading'
      })
    }
  }
</script>

<style scoped>

</style>
