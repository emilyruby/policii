<template>
  <div v-show="activated === true">
    <h1 id="title">{{heading}}</h1>
    <div class="container">
      <div class="item conservative">
        <p class="party" id="tory">conservative</p>
        <conservative :title="$route.params.title"></conservative>
      </div>
      <div class="item libdem">
        <p class="party" id="lib">liberal democrats</p>
        <libdem :title="$route.params.title"></libdem>
      </div>
      <div class="item labour">
        <p class="party" id="lab">labour</p>
        <labour :title="$route.params.title"></labour>
      </div>
      <div class="item green">
        <p class="party" id="gre">green</p>
        <green :title="$route.params.title"></green>
      </div>
      <div class="item ukip">
        <p class="party" id="uk">ukip</p>
        <ukip :title="$route.params.title"></ukip>
      </div>
    </div>
  </div>
</template>

<script>
  import Conservative from '@/components/parties/Conservative.vue'
  import Libdem from '@/components/parties/Libdem.vue'
  import Labour from '@/components/parties/Labour.vue'
  import Green from '@/components/parties/Green.vue'
  import Ukip from '@/components/parties/Ukip.vue'

  export default {
    name: 'Policies',
    components: {
      Conservative,
      Libdem,
      Labour,
      Green,
      Ukip
    },
    props: [
      'heading',
      'activated'
    ],
    updated: function () {
      console.log('child updated')
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    margin: 0;
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
