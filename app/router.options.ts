import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router'

// 基础路由
const router: RouterConfig['routes'] = () => [
  {
    path: '/',
    component: () => import('@/pages/me.vue')
  },
  // {
  //   path: '/me',
  //   component: () => import('@/pages/me.vue')
  // }
]

export default <RouterConfig> {
  // 路由配置选项
  scrollBehavior(to, from, savedPosition) {
    // 滚动行为配置
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  },
  
  // 路由守卫
  async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    // 可以在这里添加全局路由守卫逻辑
    console.log('Route change:', from.path, '->', to.path)
  },
  routes: router
} 