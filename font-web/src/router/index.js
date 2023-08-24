import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // login
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // 404
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 主页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '汉字字体版权检测技术平台', icon: 'dashboard' }
      }
    ]
  },
  // 玩转字体 -> 字体世界
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '字体世界', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '字体合集', icon: 'table' }
      },
      // {
      //   path: 'tree',
      //   name: 'Tree',
      //   component: () => import('@/views/tree/index'),
      //   meta: { title: '字体品牌', icon: 'tree' }
      // }
      {
        path: 'shang_ye',
        name: 'Shang_ye',
        component: () => import('@/views/cooperation/shang_ye/index'),
        meta: { title: '字体品牌介绍', icon: 'tree' }
      }
    ]
  },
  // 字体展示
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        // component: () => import('@/views/form/index'),
        component: () => import('@/views/tree/index'),
        meta: { title: '字体展示', icon: 'form' }
      }
    ]
  },
  // 授权购买
  {
    path: '/authorizedbuy',
    component: Layout,
    children: [
      {
        path: 'buy',
        name: 'Buy',
        component: () => import('@/views/authorizedBuy/index'),
        meta: { title: '授权购买', icon: 'form' }
      }
    ]
  },
  // 字体案例
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '字体案例',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '相关法律',icon: 'form' }
        // children: [
        //   {
        //     path: 'menu1-1',
        //     component: () => import('@/views/nested/menu1/menu1-1'),
        //     name: 'Menu1-1',
        //     meta: { title: 'Menu1-1' }
        //   },
        //   {
        //     path: 'menu1-2',
        //     component: () => import('@/views/nested/menu1/menu1-2'),
        //     name: 'Menu1-2',
        //     meta: { title: 'Menu1-2' },
        //     children: [
        //       {
        //         path: 'menu1-2-1',
        //         component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
        //         name: 'Menu1-2-1',
        //         meta: { title: 'Menu1-2-1' }
        //       },
        //       {
        //         path: 'menu1-2-2',
        //         component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
        //         name: 'Menu1-2-2',
        //         meta: { title: 'Menu1-2-2' }
        //       }
        //     ]
        //   },
        //   {
        //     path: 'menu1-3',
        //     component: () => import('@/views/nested/menu1/menu1-3'),
        //     name: 'Menu1-3',
        //     meta: { title: 'Menu1-3' }
        //   }
        // ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '案例分享', icon: 'tree' }
      },
      {
        path: 'menu3',
        component: () => import('@/views/nested/menu3/index'),
        name: 'Menu3',
        meta: { title: '数据统计', icon: 'el-icon-s-help'}
      }
    ]
  },
  // 合作
  {
    path: '/external-link',
    redirect: '/external-link/tou_gao',
    component: Layout,
    meta: { title: '相关合作', icon: 'el-icon-s-help' },
    children: [
      // {
      //   path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      //   meta: { title: '合作', icon: 'link' }
      // }
      {
        path: 'tou_gao',
        name: 'Tou_gao',
        component: () => import('@/views/cooperation/tou_gao/index'),
        meta: { title: '设计投稿', icon: 'table' }
      },
      {
        path: 'liu_lan',
        name: 'Liu_lan',
        component: () => import('@/views/cooperation/liu_lan/index'),
        meta: { title: '个性化定制', icon: 'tree' }
      },
      // {
      //   path: 'shang_ye',
      //   name: 'Shang_ye',
      //   component: () => import('@/views/cooperation/shang_ye/index'),
      //   meta: { title: '字体品牌介绍', icon: 'tree' }
      // }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
