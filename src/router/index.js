import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/HomeView.vue'
import AddJob from '../components/AddJob.vue'
import Details from '../components/DetailsJob.vue'
import EditJob from '../components/EditJob.vue'

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/add',
    component: AddJob
}, {
    path: '/jobs/:id',
    component: Details,
    props: true,
}, {
    path: '/edit/:id',
    component: EditJob,
    props: true,
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router