import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Match from '@/views/Match.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/match', name: 'Match', component: Match}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router