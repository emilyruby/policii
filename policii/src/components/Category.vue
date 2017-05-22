<template>
  <div class="item" v-on:click="expand">
    <div class="title">
      {{title}}
    </div>
    <div class="emoji">
      {{image}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'category',
    props: {
      title: {type: String, default: 'Category'},
      image: {type: String, default: '*'}
    },
    methods: {
      expand: function (event) {
        console.log(event)
      }
    }
  }
</script>

<style>
  .item {
    display: flex;
    width: 200px;
    height: 200px;
    flex-basis: auto;
    text-align: center;
    padding: 15px;
    position: relative;
  }

  .title {
    display: inline-block;
    position: absolute;
    text-align: center;
    font-size: 25px;
  }

  .emoji {
    display: inline-block;
    position: relative;
    padding-top: 50px;
    align-self: center;
    font-size: 90px;
    text-align: center;
  }

  .expanded {
    z-index: 1000;
    height: 400px;
    width: 400px;
  }
</style>
