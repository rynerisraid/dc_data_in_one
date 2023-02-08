import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * 首页
 * 
 * 后台
 * 
 */

let routes = [
  { path: '/test', name:'test page', component:()=> import('../views/TestView.vue')},
  { path: '/',name: 'home',component: HomeView },
  { path: '/about',  name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/account', name: 'account', component:()=>import('../views/AccountView.vue') },
  { path: '/login', name: 'login', component:()=>import('../views/LoginView.vue') },
  { 
    path: "/dashboard",name:'dashboard', component: ()=> import("../views/dashboard/DashboardView.vue"),
    children:[
      { path: "/dashboard/category", component: ()=> import("../views/dashboard/Category.vue") },
      { path: "/dashboard/article", component: ()=> import("../views/dashboard/ReportView.vue") },
      { path: "/dashboard/sqlEditor", component: ()=> import("../views/dashboard/SqlEditor.vue") },
  ]
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
