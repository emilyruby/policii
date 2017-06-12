<template>
  <div>
    <h1 id="title">{{$route.params.title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Policies',
    props: {
      title: {type: String, default: 'Hello'}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    font-family: 'Roboto Mono', monospace;
    color: #000000;
  }

  #title {
    font-size: 65px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
