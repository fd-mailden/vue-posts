import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import PostsPageWithStore from '@/pages/PostsPageWithStore'
import PostsPageComposition from '@/pages/PostsPageComposition'

import { createRouter, createWebHistory } from 'vue-router'

const  routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/store',
        component: PostsPageWithStore
    },
    {
        path: '/composition',
        component: PostsPageComposition
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;