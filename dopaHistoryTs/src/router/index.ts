import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import indexPage from '../views/indexPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/views/CommentPage.vue')
  },
  {
    path: '/statis',
    name: 'statis',
    component: () => import('@/views/StatisPage.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserPage.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/user/SettingPage.vue'),

  },

  {
    path: '/pages/',
    component: indexPage,
    children: [

    ]
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
