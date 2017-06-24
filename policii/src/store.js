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
      console.log(state.heading + ', ' + state.active + ', ' + state.cut)
    },
    turn (state, active) {
      state.active = active
    },
    switch (state, header) {
      state.heading = header
      state.cut = header.split(' ')[0]
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
