import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/aboutWe',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mediaInformation',
      component: () => import(/* webpackChunkName: "MediaInformation" */ './views/MediaInformation.vue')
    },
    {
      path: '/news',
      component: () => import(/* webpackChunkName: "News" */ './views/News.vue')
    }
  ]
})
