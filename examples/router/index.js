/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/layout', name: 'Layout', component: () => import(/* webpackChunkName: "layout" */ '../views/layout/index.vue') },
  { path: '/scroll', name: 'Scroll', component: () => import(/* webpackChunkName: "scroll" */ '../views/scroll/index.vue') },
  { path: '/roll', name: 'Roll', component: () => import(/* webpackChunkName: "roll" */ '../views/roll/index.vue') },
  { path: '/json', name: 'Json', component: () => import(/* webpackChunkName: "json" */ '../views/json/index.vue') },
  { path: '/icon', name: 'Icon', component: () => import(/* webpackChunkName: "icon" */ '../views/icon/index.vue') },
  { path: '/rate', name: 'Rate', component: () => import(/* webpackChunkName: "rate" */ '../views/rate/index.vue') },
  { path: '/radio', name: 'Radio', component: () => import(/* webpackChunkName: "radio" */ '../views/radio/index.vue') },
  { path: '/checkbox', name: 'Checkbox', component: () => import(/* webpackChunkName: "checkbox" */ '../views/checkbox/index.vue') },
  { path: '/qrcode', name: 'Qrcode', component: () => import(/* webpackChunkName: "qrcode" */ '../views/qrcode/index.vue') },
  { path: '/dialog', name: 'Dialog', component: () => import(/* webpackChunkName: "dialog" */ '../views/dialog/index.vue') },
  { path: '/skeleton', name: 'Skeleton', component: () => import(/* webpackChunkName: "skeleton" */ '../views/skeleton/index.vue') },
  { path: '/signedBoard', name: 'SignedBoard', component: () => import(/* webpackChunkName: "signedBoard" */ '../views/signedBoard/index.vue') },
  { path: '/sticky', name: 'Sticky', component: () => import(/* webpackChunkName: "signedBoard" */ '../views/sticky/index.vue') },
  { path: '/utils', name: 'Utils', redirect: '/utils/directives', component: () => import(/* webpackChunkName: "mixins" */ '../views/utils'), children: [
      { path: 'directives', redirect: '/utils/directives/input', name: 'Directive', component: () => import(/* webpackChunkName: "directives" */ '../views/utils/directives'), children: [
          { path: 'input', name: 'DirectiveInput', component: () => import(/* webpackChunkName: "about" */ '../views/utils/directives/input/index.vue') },
          { path: 'img', name: 'DirectiveImg', component: () => import(/* webpackChunkName: "about" */ '../views/utils/directives/img/index.vue') },
          { path: 'heightFollowWidth', name: 'DirectiveHeightFollowWidth', component: () => import(/* webpackChunkName: "about" */ '../views/utils/directives/heightFollowWidth/index.vue') },
        ]
      },
      { path: 'mixins', redirect: '/utils/mixins/mixModel', name: 'Mixin', component: () => import(/* webpackChunkName: "mixins" */ '../views/utils/mixins'), children: [
          { path: 'mixModel', name: 'MixinModel', component: () => import(/* webpackChunkName: "about" */ '../views/utils/mixins/mixModel/index.vue') },
          { path: 'mixDialog', name: 'MixinDialog', component: () => import(/* webpackChunkName: "about" */ '../views/utils/mixins/mixDialog/index.vue') },
          { path: 'mixMobileOnPc', name: 'MixinMobileOnPc', component: () => import(/* webpackChunkName: "about" */ '../views/utils/mixins/mixMobileOnPc/index.vue') },
        ]
      },
      { path: 'validators', redirect: '/utils/validators/elementUiValidators', name: 'Validators', component: () => import(/* webpackChunkName: "validators" */ '../views/utils/validators'), children: [
          { path: 'elementUiValidators', name: 'ElementUiValidators', component: () => import(/* webpackChunkName: "about" */ '../views/utils/validators/elementUiValidators/index.vue') },
        ]
      },
      { path: 'natives', redirect: '/utils/natives/extObject', name: 'Natives', component: () => import(/* webpackChunkName: "natives" */ '../views/utils/natives'), children: [
          { path: 'extObject', name: 'NativeExtObject', component: () => import(/* webpackChunkName: "extObject" */ '../views/utils/natives/extObject/index.vue') },
          { path: 'extDate', name: 'NativeExtDate', component: () => import(/* webpackChunkName: "extDate" */ '../views/utils/natives/extDate/index.vue') },
          { path: 'extFormData', name: 'NativeExtFormData', component: () => import(/* webpackChunkName: "extFormData" */ '../views/utils/natives/extFormData/index.vue') },
        ]
      },
    ]
  },
  { path: '/thirdComponents', name: 'ThirdComponents', component: () => import(/* webpackChunkName: "thirdComponents" */ '../views/thirdComponents/index.vue') },
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
