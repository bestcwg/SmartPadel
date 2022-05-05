import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import SearchForMatch from '../views/SearchForMatch.vue'
import CreateMatch from '../views/CreateMatch.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/searchformatch',
        name: 'SearchForMatch',
        component: SearchForMatch
    },
    {
        path: '/creatematch',
        name: 'CreateMatch',
        component: CreateMatch
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router