import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/map'
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/latest',
    name: 'Latest',
    component: () => import( '../views/Latest.vue')
  },
  {
    path: '/shanghai',
    name: 'SH',
    component: () => import('../views/SH.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base:'epidemic',
  routes
})

export default router
