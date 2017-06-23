<template>
  <div>
    <brexit v-show="cut === 'brexit'" :cut="cut"></brexit>
    <disabilities v-show="cut === 'disabilities'" :cut="cut"></disabilities>
    <diverse v-show="cut === 'diverse'" :cut="cut"></diverse>
    <economy v-show="cut === 'economy'" :cut="cut"></economy>
    <education v-show="cut === 'education'" :cut="cut"></education>
    <environment v-show="cut === 'environment'" :cut="cut"></environment>
    <foreign v-show="cut === 'foreign'" :cut="cut"></foreign>
    <healthcare v-show="cut === 'healthcare'" :cut="cut"></healthcare>
    <housing v-show="cut === 'housing'" :cut="cut"></housing>
    <industry v-show="cut === 'industry'" :cut="cut"></industry>
    <infrastructure v-show="cut === 'infrastructure'" :cut="cut"></infrastructure>
    <local v-show="cut === 'local'" :cut="cut"></local>
    <security v-show="cut === 'security'" :cut="cut"></security>
    <social v-show="cut === 'social'" :cut="cut"></social>
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
        cut: 'cut'
      })
    }
  }
</script>

<style scoped>

</style>
