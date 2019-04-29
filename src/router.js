import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Register from './views/register.vue'
import Cashout from './views/cashout.vue'
import My from './views/my.vue'
import invite from './views/invite.vue'
import mytoken from './views/mytoken.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/cashout',
      component: Cashout
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/invite',
      component: invite
    },
    {
      path: '/mytoken',
      component: mytoken
    },
    
  ]
})
