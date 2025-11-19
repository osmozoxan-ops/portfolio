import { createRouter, createWebHistory } from 'vue-router'
import HomeWebsite from '@/pages/HomeWebsite.vue'
import FavoriteWebsite from '@/pages/FavoriteWebsite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/website',
      name: 'website',
      component: () => import('../views/website.vue'),
      children: [
        {
          path: 'home',
          name: 'website-home',
          component: HomeWebsite,
        },
        {
          path: 'favorite',
          name: 'website-favorite',
          component: FavoriteWebsite,
        },
      ],
    },
  ],
})

export default router
