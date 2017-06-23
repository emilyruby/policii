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
  import { mapGetters } from 'vuex'

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
    computed: {
      ...mapGetters({
        cut: 'cut'
      })
    }
  }
</script>

<style scoped>

</style>
