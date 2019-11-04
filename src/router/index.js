import Vue from 'vue'
import VueRouter from 'vue-router'
import moveRouter from './move'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(VueRouter)

const routes = [
  moveRouter,
  mineRouter,
  cinemaRouter,
  {
    path: '/*',
    redirect: '/move'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
