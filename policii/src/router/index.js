import Vue from 'vue'
import Router from 'vue-router'
import Policii from '@/components/Policii'
import Policies from '@/components/Policies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Policii',
      component: Policii
    },
    {
      path: '/:title',
      name: 'Policies',
      component: Policies,
      props: true
    }
  ]
})
