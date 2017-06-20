<template>
  <div v-show="activated === true">
    <h1 id="title">{{heading}}</h1>
    <div class="container">
      <div class="item conservative">
        <p class="party" id="tory">conservative</p>
      </div>
      <div class="item libdem">
        <p class="party" id="lib">liberal democrats</p>
      </div>
      <div class="item labour">
        <p class="party" id="lab">labour</p>
      </div>
      <div class="item green">
        <p class="party" id="gre">green</p>
      </div>
      <div class="item ukip">
        <p class="party" id="uk">ukip</p>
      </div>
      <conservative :heading="heading">
        Hello
      </conservative>
      <libdem :heading="heading"></libdem>
      <labour :heading="heading"></labour>
      <green :heading="heading"></green>
      <ukip :heading="heading"></ukip>
    </div>
  </div>
</template>

<script>
  import Conservative from '@/components/Parties/Conservative.vue'
  import Libdem from '@/components/Parties/Libdem.vue'
  import Labour from '@/components/Parties/Labour.vue'
  import Green from '@/components/Parties/Green.vue'
  import Ukip from '@/components/Parties/Ukip.vue'

  export default {
    name: 'Policies',
    components: {
      Conservative,
      Libdem,
      Labour,
      Green,
      Ukip
    },
    props: {
      heading: '',
      activated: ''
    },
    updated: function () {
      console.log('child updated')
    }
  }
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 25% 100px auto;
    justify-items: center;
    width: 100vw;
    align-items: start;
    justify-content: center;
  }
  body {
    font-family: 'Roboto Mono', monospace;
    color: #000000;
  }
  #title {
    font-size: 45px;
    font-weight: 400;
  }
  .party {
    font-size: 2vw;
    text-emphasis: circle;
    font-weight: 600;
  }
  #tory {
    grid-column: 1;
    grid-row: 1;
    color: darkblue;
  }
  #lib {
    grid-column: 2;
    grid-row: 1;
    color: #ffcc00;
  }
  #lab {
    grid-column: 3;
    grid-row: 1;
    color: darkred;
  }
  #gre {
    grid-column: 4;
    grid-row: 1;
    color: green;
  }
  #uk {
    grid-column: 15;
    grid-row: 1;
    color: purple;
  }
</style>
