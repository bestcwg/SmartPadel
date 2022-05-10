import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import SearchForMatch from '../views/SearchForMatch.vue'
import CreateMatch from '../views/CreateMatch.vue'
import Date from '../views/Date.vue'
import Time from '../views/Time.vue'
import Availability from '../views/AvailabilityInCenter.vue'
import Login from '../views/Login.vue'
import { auth } from '../firebase-config'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAtuh: true
        }
    },
    {
        path: '/searchformatch',
        name: 'SearchForMatch',
        component: SearchForMatch,
        meta: {
            requiresAtuh: true
        }
    },
    {
        path: '/creatematch',
        name: 'CreateMatch',
        component: CreateMatch,
        meta: {
            requiresAtuh: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        
    },
    {
        path: '/date', 
        name: 'Date', 
        component: Date,
        meta: {
            requiresAtuh: true
        }
    },
    {
        path: '/time', 
        name: 'Time', 
        component: Time,
        meta: {
            requiresAtuh: true
        }
    },
    {
        path: '/availability', 
        name: 'Availability', 
        component: Availability,
        meta: {
            requiresAtuh: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

  
  router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
      next('/')
      return;
    }
  
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/login')
      return;
    }
  
    next();
  })

export default router   