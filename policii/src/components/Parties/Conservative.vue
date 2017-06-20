<template>
  <div>
    <brexit :heading="heading">
    </brexit>
    <disabilities v-show="title"></disabilities>
    <diverse v-show="title"></diverse>
    <economy v-show="title"></economy>
    <education v-show="title"></education>
    <environment v-show="title"></environment>
    <foreign v-show="title"></foreign>
    <healthcare v-show="title"></healthcare>
    <housing v-show="title"></housing>
    <industry v-show="title"></industry>
    <infrastructure v-show="title"></infrastructure>
    <local v-show="title"></local>
    <security v-show="title"></security>
    <social v-show="title"></social>
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
    props: {
      heading: ''
    },
    computed: {
      title: function () {
        return this.heading.split(' ')[0]
      }
    },
    updated: function () {
      console.log('conservative updated')
    }
  }
</script>

<style scoped>

</style>
