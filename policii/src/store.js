import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    heading: '',
    active: false
  },
  mutations: {
    update (state, todo) {
      state.header = todo.title
      state.active = todo.active
    }
  }
})
