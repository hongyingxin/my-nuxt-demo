import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  // 获取当前时间
  const now = new Date().toISOString()
  
  // 记录访问日志
  console.log(`[${now}] 访问路径: ${to.path}`)
  
  // 模拟检查用户是否登录
  const isAuthenticated = true // 这里替换为实际的登录检查逻辑
  
  // 需要登录才能访问的路由
  const authRoutes = ['/dashboard', '/profile', '/settings']
  
  // 检查是否需要登录
  if (authRoutes.includes(to.path) && !isAuthenticated) {
    // 如果未登录，重定向到登录页面
    return navigateTo('/login')
  }
  
  // 如果已登录用户访问登录页面，重定向到首页
  if (to.path === '/login' && isAuthenticated) {
    return navigateTo('/')
  }
  
  // 可以在这里添加其他全局中间件逻辑
  // 例如：权限检查、请求头处理等
}) 