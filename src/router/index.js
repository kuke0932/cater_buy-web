import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'
import Stall from '@/views/stall/index.vue'
import stallDetails from '@/views/stall/details.vue'
import stallAdd from '@/views/stall/add.vue'
import stallSelect from '@/views/stall/select.vue'

import Center from '@/views/center/index.vue'
import centerDetails from '@/views/center/details.vue'
import centerAdd from '@/views/center/add.vue'
import centerSelect from '@/views/center/select.vue'

import Purchase from '@/views/purchase/index.vue'
import purchaseDetails from '@/views/purchase/details.vue'
import purchaseAdd from '@/views/purchase/add.vue'
import purchaseSelect from '@/views/purchase/select.vue'

import Warehouse from '@/views/warehouse/index.vue'
import warehouseDetails from '@/views/warehouse/details.vue'
import warehouseAdd from '@/views/warehouse/add.vue'
import warehouseSelect from '@/views/warehouse/select.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/403',
    component: require('@/views/errorPage/403.vue').default
  },
  { path: '/404',
    component: require('@/views/errorPage/404.vue').default
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/stall',
    name: 'stall',
    component: Stall
  },
  {
    path: '/stall/details',
    name: 'stallDetails',
    component: stallDetails
  },
  {
    path: '/stall/add',
    name: 'stallAdd',
    component: stallAdd
  },
  {
    path: '/stall/select',
    name: 'stallSelect',
    component: stallSelect
  },
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/center/details',
    name: 'centerDetails',
    component: centerDetails
  },
  {
    path: '/center/add',
    name: 'centerAdd',
    component: centerAdd
  },
  {
    path: '/center/select',
    name: 'centerSelect',
    component: centerSelect
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: Purchase
  },
  {
    path: '/purchase/details',
    name: 'purchaseDetails',
    component: purchaseDetails
  },
  {
    path: '/purchase/add',
    name: 'purchaseAdd',
    component: purchaseAdd
  },
  {
    path: '/purchase/select',
    name: 'purchaseSelect',
    component: purchaseSelect
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: Warehouse
  },
  {
    path: '/warehouse/details',
    name: 'warehousDetails',
    component: warehouseDetails
  },
  {
    path: '/warehouse/add',
    name: 'warehouseAdd',
    component: warehouseAdd
  },
  {
    path: '/warehouse/select',
    name: 'warehouseSelect',
    component: warehouseSelect
  },
  {
    path: '*',
    component: require('@/views/errorPage/404.vue').default
  }
]

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
