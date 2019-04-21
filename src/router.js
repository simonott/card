import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Register from './views/register.vue'
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
    
  ]
})
