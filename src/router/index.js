import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Profile from '@/components/Profile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  hashbang: false,
  mode: 'history'
})


export default router
