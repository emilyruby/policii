<template>
  <div class="container">
    <router-link :to="{
    name: 'Policies', params: { title: 'environment & animal cruelty' }}">
      <category title="environment & animal cruelty" image="🌳"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'healthcare' }}">
      <category title="healthcare" image="🏥"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'education & childcare' }}">
      <category title="education & childcare" image="📚"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'security & defence' }}">
      <category title="security & defence" image="🏰"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'brexit' }}">
      <category title="brexit" image="🇪🇺"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'economy & democracy' }}">
      <category title="economy & democracy" image="💰"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'social care and security' }}">
      <category title="social care and security" image="🎗️"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'local communities' }}">
      <category title="local communities" image="🏙"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'infrastructure' }}">
      <category title="infrastructure" image="🚂"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'industry' }}">
      <category title="industry" image="🏭"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'housing' }}">
      <category title="housing" image="🏡"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'diverse & cultured communities' }}">
      <category title="diverse & cultured communities" image="🌈"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'disabilities and mental health' }}">
      <category title="disabilities and mental health" image="♿️"></category>
    </router-link>

    <router-link :to="{
    name: 'Policies', params: { title: 'foreign policy' }}">
      <category title="foreign policy" image="🌍️"></category>
    </router-link>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'categories',
  components: {
    Category
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    align-items: flex-start;
  }
</style>
