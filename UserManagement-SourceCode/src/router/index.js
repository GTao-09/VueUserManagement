import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import CustomerDetail from '../components/CustomerDetails.vue'
import Add from '../components/Add.vue'
import About from '../components/About.vue'
import Edit from '../components/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/add',
      name: 'AddLink',
      component: Add
    },
    {
      path: '/customerdetail/:id',
      name: 'CustomerDetailLink',
      component: CustomerDetail
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/edit/:id',
      component: Edit
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
  mode: 'history'
})
