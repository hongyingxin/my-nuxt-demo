import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router'

export default <RouterConfig> {
  // 路由配置选项
  scrollBehavior(to, from, savedPosition) {
    console.log('scrollBehavior', to, from, savedPosition)
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
} 