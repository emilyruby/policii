<template>
  <div class="item" v-on:click="expand">
    <div class="title" v-on:click="expand">
    {{title}}
  </div>
    <div class="emoji" v-on:click="do_nothing">
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
        if (event.srcElement.classList.contains('expanded')) {
          event.srcElement.classList.remove('expanded')
        } else {
          event.srcElement.classList.add('expanded')
        }
      },
      do_nothing: function (event) {
        event.stopPropagation()
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
    justify-content: center;
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

  a:visited, a:active, a:hover, a:visited {
    text-decoration: none;
  }


</style>
