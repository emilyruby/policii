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
    height: auto;
    flex-basis: auto;
    text-align: center;
    position: relative;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    order: 1;
    text-align: center;
    font-size: 25px;
  }

  .emoji {
    order: 2;
    padding-top: 10px;
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
