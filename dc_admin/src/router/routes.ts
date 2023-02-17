
const routes=[
    { 
        path: '/', component:()=> import('~/pages/index.vue') 
    },
    {
        path:'/login', component: ()=> import('~/pages/login.vue')
    }
]


// 重新组织后导出
export default [
    ...routes
  ]
  