<template>
  <div>
    <h1 id="title">{{$route.params.title}}</h1>
    <div class="container">
      <div class="conservative">
        <p class="party" id="tory">conservative</p>
      </div>
      <div class="libdem">
        <p class="party" id="lib">liberal democrats</p>
      </div>
      <div class="labour">
        <p class="party" id="lab">labour</p>
      </div>
      <div class="green">
        <p class="party" id="gre">green</p>
      </div>
      <div class="ukip">
        <p class="party" id="uk">ukip</p>
      </div>
    </div>
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

  .container {
    padding-top: 30px;
    height: 10px;
    display: grid;
    grid-template-columns: 17vw 17vw 17vw 17vw 17vw;
    grid-template-rows: 10px;
    align-items: center;
  }
  body {
    font-family: 'Roboto Mono', monospace;
    color: #000000;
  }
  #title {
    font-size: 65px;
    font-weight: 400;
  }
  .conservative {
    grid-column-start: 1;
    grid-row-start: 1
  }
  .libdem {
    grid-column-start: 2;
    grid-row-start: 1
  }
  .labour {
    grid-column-start: 3;
    grid-row-start: 1
  }
  .green {
    grid-column-start: 4;
    grid-row-start: 1
  }
  .ukip {
    grid-column-start: 5;
    grid-row-start: 1
  }
  .party {
    font-size: 2vw;
    text-emphasis: circle;
    font-weight: 600;
  }
  #tory {
    color: darkblue;
  }
  #lib {
    color: #ffcc00;
  }
  #lab {
    color: darkred;
  }
  #gre {
    color: green;
  }
  #uk {
    color: purple;
  }
</style>
