const Layout = () => import ('@/layout/index.vue')

export default {
    name: 'Data Management',
    path: '/data-management',
    component: Layout,
    meta:{
        title: '数据治理',
        icon: 'foundation:anchor',
        order: 1
    },
    children: [
      {
        name: 'SQL Editor',
        path: 'sql-editor',
        component: () => import('./sql-editor/index.vue'),
        meta: {
          title: 'SQL 编辑器',
          icon: 'codicon:code',
          order: 1,
        },
      },
      {
        name: 'Data Graph',
        path: 'data-graph',
        component: () => import('./data-graph/index.vue'),
        meta: {
          title: '数据图谱',
          icon: 'codicon:map',
          order: 2,
        },
      }
    ],
  }
  