<template>
  <ClientOnly>
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">客户端渲染页面 (CSR)</h1>
      <div class="bg-green-50 p-6 rounded-lg border-2 border-green-200">
        <div class="flex items-center mb-4">
          <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <p class="text-green-700 font-medium">客户端渲染</p>
        </div>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded shadow-sm">
            <p class="text-sm text-gray-500 mb-1">客户端时间</p>
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
  </ClientOnly>
</template>

<script setup>
const currentTime = ref('加载中...')
const loadTime = ref('加载中...')
const renderLocation = ref('加载中...')

// 在客户端挂载后更新数据
onMounted(() => {
  // 模拟加载延迟
  setTimeout(() => {
    currentTime.value = new Date().toLocaleString()
    loadTime.value = new Date().toLocaleString()
    renderLocation.value = '浏览器端'
  }, 1000)
})

// 添加一个客户端特有的标记
useHead({
  title: '客户端渲染示例',
  meta: [
    { name: 'description', content: '这是一个客户端渲染的页面' }
  ]
})
</script> 