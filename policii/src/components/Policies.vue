<template>
  <div v-on:active="active = !active" v-show="active === true">
    <h1 id="title">{{$route.params.title}}</h1>
    <div class="container">
      <div class="conservative">
        <p class="party" id="tory">conservative</p>
        <conservative :title="$route.params.title"></conservative>
      </div>
      <div class="libdem">
        <p class="party" id="lib">liberal democrats</p>
        <libdem :title="$route.params.title"></libdem>
      </div>
      <div class="labour">
        <p class="party" id="lab">labour</p>
        <labour :title="$route.params.title"></labour>
      </div>
      <div class="green">
        <p class="party" id="gre">green</p>
        <green :title="$route.params.title"></green>
      </div>
      <div class="ukip">
        <p class="party" id="uk">ukip</p>
        <ukip :title="$route.params.title"></ukip>
      </div>
    </div>
  </div>
</template>

<script>
  import Conservative from '@/components/Conservative.vue'
  import Libdem from '@/components/Libdem.vue'
  import Labour from '@/components/Labour.vue'
  import Green from '@/components/Green.vue'
  import Ukip from '@/components/Ukip.vue'

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
      title: {type: String, default: 'Hello'}
    },
    data: function () {
      return {
        active: false
      }
    },
    methods: {
      active: function (a) {
        console.log('hello')
        this.active = a
      }
    },
    created: function () {
      this.$on('active', this.active)
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
