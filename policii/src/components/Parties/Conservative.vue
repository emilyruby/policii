<template>
  <div>
    <brexit :heading="heading" v-show="heading === 'brexit'"></brexit>
    <disabilities :heading="heading" v-show="heading === 'disabilities'"></disabilities>
    <diverse :heading="heading" v-show="heading === 'diverse'"></diverse>
    <economy :heading="heading" v-show="heading === 'economy'"></economy>
    <education :heading="heading" v-show="heading === 'education'"></education>
    <environment :heading="heading" v-show="heading === 'environment'"></environment>
    <foreign :heading="heading" v-show="heading === 'foreign'"></foreign>
    <healthcare :heading="heading" v-show="heading === 'healthcare'"></healthcare>
    <housing :heading="heading" v-show="heading === 'housing'"></housing>
    <industry :heading="heading" v-show="heading === 'industry'"></industry>
    <infrastructure :heading="heading" v-show="heading === 'infrastructure'"></infrastructure>
    <local :heading="heading" v-show="heading === 'local'"></local>
    <security :heading="heading" v-show="heading === 'security'"></security>
    <social :heading="heading" v-show="heading === 'social'"></social>
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
        heading: 'heading'
      })
    }
  }
</script>

<style scoped>

</style>
