import { createRouter, createWebHistory } from 'vue-router'
import LivroLivraria from '../views/LivroLivraria.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LivroLivraria,
    },
  ]
})

export default router
