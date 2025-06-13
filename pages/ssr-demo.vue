<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">服务端渲染页面 (SSR)</h1>
    <div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
        <p class="text-blue-700 font-medium">服务器端渲染</p>
      </div>
      <div class="space-y-4">
        <div class="bg-white p-4 rounded shadow-sm">
          <p class="text-sm text-gray-500 mb-1">服务器时间</p>
          <p class="text-lg font-mono">{{ currentTime }}</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <p class="text-sm text-gray-500 mb-1">页面加载时间</p>
          <p class="text-lg font-mono">{{ loadTime }}</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <p class="text-sm text-gray-500 mb-1">渲染位置</p>
          <p class="text-lg">{{ renderLocation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 服务端渲染的数据
const currentTime = new Date().toLocaleString()
const loadTime = new Date().toLocaleString()
const renderLocation = '服务器端'

// 添加一个服务端特有的标记
useHead({
  title: '服务端渲染示例',
  meta: [
    { name: 'description', content: '这是一个服务端渲染的页面' }
  ]
})
</script> 