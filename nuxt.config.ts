// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  
  // 添加路由规则
  routeRules: {
    // 服务端渲染页面
    '/ssr-demo': { 
      ssr: true 
    },
    // 客户端渲染页面
    '/client-demo': { 
      ssr: false 
    },
    // 混合渲染页面
    '/mixed-demo': { 
      ssr: true 
    }
  },
})
