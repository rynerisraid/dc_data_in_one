import { createRouter, createWebHistory } from 'vue-router'


// 路由数据
//import routes from './routes'

// 采用约定优于配置编程
import routes from '~pages'

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
