import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import SearchForMatch from '../views/SearchForMatch.vue'
import CreateMatch from '../views/CreateMatch.vue'
import Date from '../views/Date.vue'
import Time from '../views/Time.vue'
import Availability from '../views/AvailabilityInCenter.vue'
import Login from '../views/Login.vue'
import { auth } from '../database/firebase-config'

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
        meta: {
            requiresAtuh: false
        }
        
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
    }, 

    {
        path: '/settings', 
        name: 'Settings', 
        component: Settings,
        
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !auth.currentUser) next({ name: 'Login' })
    else next()
  })

export default router   