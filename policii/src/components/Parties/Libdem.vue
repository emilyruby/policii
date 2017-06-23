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
        cut: 'cut'
      })
    }
  }
</script>

<style scoped>

</style>
