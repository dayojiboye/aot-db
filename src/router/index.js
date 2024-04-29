import HomeViewVue from '@/views/HomeView.vue'
import NotFoundViewVue from '@/views/NotFoundView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundViewVue
    }
  ]
})

export default router
