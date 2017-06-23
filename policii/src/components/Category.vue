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
    }
  }
</script>

<style>
  .item {
    display: flex;
    width: 250px;
    height: 280px;
    flex-basis: auto;
    text-align: center;
    position: relative;
    justify-content: center;
  }

  .title {
    display: inline-block;
    position: absolute;
    text-align: center;
    font-size: 25px;
    padding: 15px;
  }

  .emoji {
    display: inline-block;
    position: relative;
    padding-top: 80px;
    align-self: center;
    font-size: 90px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    list-style-position: inside;
  }

  li {
    margin: 0 0 15px 0;
  }

  code {
    color: purple;
  }
</style>
