<template>
  <div v-on:click="showme()" v-show="this.toggle === true" class="content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'policii',
    computed: {
      ...mapGetters({
        toggle: 'toggle'
      })
    },
    methods: {
      showme () {
        console.log('hi')
      }
    }
  }
</script>

<style scoped>
  .content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    font-size: 12px;
    height: auto;
  }

  .content:hover {
    display: block;
    z-index: 10000;
  }

  .content a:hover {
    background-color: #f1f1f1;
  }

  .content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
</style>
