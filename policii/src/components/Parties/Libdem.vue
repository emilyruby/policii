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
