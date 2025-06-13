<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          欢迎使用
        </h1>
        <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          请选择要访问的页面
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <!-- 仪表盘按钮 -->
        <NuxtLink
          to="/dashboard"
          class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <div>
            <span class="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <span class="absolute inset-0" aria-hidden="true"></span>
              仪表盘
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              查看数据统计和概览
            </p>
          </div>
        </NuxtLink>

        <!-- 个人资料按钮 -->
        <NuxtLink
          to="/profile"
          class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <div>
            <span class="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <span class="absolute inset-0" aria-hidden="true"></span>
              个人资料
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              管理个人信息和头像
            </p>
          </div>
        </NuxtLink>

        <!-- 设置按钮 -->
        <NuxtLink
          to="/settings"
          class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <div>
            <span class="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <span class="absolute inset-0" aria-hidden="true"></span>
              设置
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              管理通知和隐私设置
            </p>
          </div>
        </NuxtLink>

        <!-- 登录按钮 -->
        <NuxtLink
          to="/login"
          class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <div>
            <span class="rounded-lg inline-flex p-3 bg-red-50 text-red-700 ring-4 ring-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <span class="absolute inset-0" aria-hidden="true"></span>
              登录
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              登录您的账户
            </p>
          </div>
        </NuxtLink>

        <!-- fetch按钮 -->
        <NuxtLink
        to="/fetch-demo"
          class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <div>
            <span class="rounded-lg inline-flex p-3 bg-red-50 text-red-700 ring-4 ring-white">
              <!-- 换个图标 -->
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <span class="absolute inset-0" aria-hidden="true"></span>
              fetch
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              演示fetch
            </p>
          </div>
        </NuxtLink>
        
        <!-- 请求封装演示按钮 -->
        <NuxtLink
          to="/request-demo"
          class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <div>
            <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <span class="absolute inset-0" aria-hidden="true"></span>
              请求封装
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              请求工具演示
            </p>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuxt 渲染模式示例
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            了解不同的渲染模式及其特点
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- SSR 示例链接 -->
          <NuxtLink
            to="/ssr-demo"
            class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <span class="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-medium">
                <span class="absolute inset-0" aria-hidden="true"></span>
                服务端渲染 (SSR)
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                查看服务端渲染示例，内容在服务器端生成
              </p>
            </div>
          </NuxtLink>

          <!-- CSR 示例链接 -->
          <NuxtLink
            to="/client-demo"
            class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <span class="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-medium">
                <span class="absolute inset-0" aria-hidden="true"></span>
                客户端渲染 (CSR)
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                查看客户端渲染示例，内容在浏览器端生成
              </p>
            </div>
          </NuxtLink>

          <!-- 混合渲染示例链接 -->
          <NuxtLink
            to="/mixed-demo"
            class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-medium">
                <span class="absolute inset-0" aria-hidden="true"></span>
                混合渲染
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                查看混合渲染示例，同时使用 SSR 和 CSR
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>