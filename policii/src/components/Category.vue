<template>
    <div class="item">
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
      title: {type: String, default: ''},
      image: {type: String, default: '*'}
    },
    computed: {

    }
  }
</script>

<style>
  .item {
    display: flex;
    width: 250px;
    height: 250px;
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

  a {
    text-decoration: none;
    color: black;
  }
</style>
