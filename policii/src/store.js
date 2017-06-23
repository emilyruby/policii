import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heading: '',
    active: false,
    cut: ''
  },
  mutations: {
    update (state, todo) {
      state.heading = todo.title
      state.active = todo.active
      state.cut = todo.title.split(' ')[0]
      console.log(state.cut)
    }
  },
  getters: {
    active: state => {
      return state.active
    },
    heading: state => {
      return state.heading
    },
    cut: state => {
      return state.cut
    }
  }
})
