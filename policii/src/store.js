import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heading: '',
    active: false
  },
  mutations: {
    update (state, todo) {
      state.header = todo.title
      state.active = todo.active
      console.log(state.header + ', ' + state.active)
    }
  },
  getters: {
    active: state => {
      return state.active
    },
    heading: state => {
      return state.heading
    }
  }
})
