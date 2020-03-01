/*
 * @Description: 路由配置文件
 * @Author: kcz
 * @Date: 2020-02-29 16:14:53
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 14:40:21
 */

import Layout from '../views/layout/index.vue'
import RouterView from '../views/layout/RouterView.vue'

// 异步加载路由配置
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'pie-chart',
          hideBreadcrumb: true // 隐藏当前页面的面包屑
        },
        component: () => import('@/views/dashboard/index')
      },
      {
        path: 'test',
        name: 'test1',
        meta: {
          title: '测试1',
          icon: 'file-text'
        },
        component: RouterView,
        children: [
          {
            path: 'home',
            name: 'test2',
            meta: {
              title: '测试22',
              icon: 'file-text'
            },
            component: () => import('@/views/home/index')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// 默认加载路由配置
export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/login')
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  }
  // {
  //   path: '/',
  //   redirect: '/login'
  // }
]
