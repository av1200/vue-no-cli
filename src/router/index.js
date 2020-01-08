import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '../components/HelloWorld')
    },
    {
      path: '/About',
      name: 'about',
      component: () => import(/* webpackChunkName: "About" */ "../components/about")
    }
  ]
})
