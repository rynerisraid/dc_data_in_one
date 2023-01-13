// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   //component: () => import('@/layouts/default/Default.vue'),
  //   component: () => import('@/layouts/three_col/ThreeColumn.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Home',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  //     },
  //   ],
  // },
  {
    path:'/',
    name:'Home',
    component:()=>import('@/views/Home.vue'),
  },
  {
    path:'/dashboard',
    component:()=>import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path:'/login',
    component:()=>import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
