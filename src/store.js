import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heading: '',
    active: false,
    cut: '',
    toggle: false
  },
  mutations: {
    update (state, todo) {
      state.heading = todo.title
      state.active = todo.active
      state.cut = todo.title.split(' ')[0]
      console.log(state.heading + ', ' + state.active + ', ' + state.cut)
    },
    turn (state, active) {
      state.active = active
    },
    switch (state, header) {
      state.heading = header
      state.cut = header.split(' ')[0]
    },
    togglecontent (state) {
      state.toggle = !state.toggle
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
    },
    toggle: state => {
      return state.toggle
    }
  }
})
