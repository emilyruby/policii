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
        cut: 'cut'
      })
    }
  }
</script>

<style scoped>

</style>
