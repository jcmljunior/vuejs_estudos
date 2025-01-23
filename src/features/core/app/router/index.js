import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Pomodoro',
    component: () => import('@/features/pomodoro/views/index.vue'),
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('@/features/counter/views/index.vue'),
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('@/features/todos/views/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Pomodoro' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export {
  router,
  routes
}
