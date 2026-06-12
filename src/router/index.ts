import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'page' }
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: () => import('@/views/AboutView.vue'),
      meta: { transition: 'slide' }
    },
    {
      path: '/cabang',
      name: 'cabang',
      component: () => import('@/views/BranchesView.vue'),
      meta: { transition: 'zoom' }
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: () => import('@/views/ContactView.vue'),
      meta: { transition: 'slide' }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
