import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Match from '../views/Match.vue'
import CreateMatch from '../views/CreateMatch.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/match', name: 'Match', component: Match},
    {path: '/creatematch', name: 'CreateMatch', component: CreateMatch}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router