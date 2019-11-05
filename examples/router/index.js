/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/layout', name: 'Layout', component: () => import(/* webpackChunkName: "layout" */ '../views/layout/index.vue') },
  { path: '/roll', name: 'Roll', component: () => import(/* webpackChunkName: "roll" */ '../views/roll/index.vue') },
  { path: '/json', name: 'Json', component: () => import(/* webpackChunkName: "json" */ '../views/json/index.vue') },
  { path: '/about', name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
