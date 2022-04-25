import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchForMatch from '../views/SearchForMatch.vue'
import CreateMatch from '../views/CreateMatch.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/searchformatch', name: 'SearchForMatch', component: SearchForMatch},
    {path: '/creatematch', name: 'CreateMatch', component: CreateMatch}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router