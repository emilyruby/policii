import Vue from 'vue'
import Router from 'vue-router'
import Policii from '@/components/Policii'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Policii',
      component: Policii
    }
  ]
})
