<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">混合渲染页面</h1>
    
    <!-- 服务端渲染部分 -->
    <div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-6">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
        <p class="text-blue-700 font-medium">服务端渲染部分</p>
      </div>
      <div class="space-y-4">
        <div class="bg-white p-4 rounded shadow-sm">
          <p class="text-sm text-gray-500 mb-1">服务器时间</p>
          <p class="text-lg font-mono">{{ serverTime }}</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <p class="text-sm text-gray-500 mb-1">渲染位置</p>
          <p class="text-lg">服务器端</p>
        </div>
      </div>
    </div>

    <!-- 客户端渲染部分 -->
    <ClientOnly>
      <div class="bg-green-50 p-6 rounded-lg border-2 border-green-200">
        <div class="flex items-center mb-4">
          <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <p class="text-green-700 font-medium">客户端渲染部分</p>
        </div>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded shadow-sm">
            <p class="text-sm text-gray-500 mb-1">客户端时间</p>
            <p class="text-lg font-mono">{{ clientTime }}</p>
          </div>
          <div class="bg-white p-4 rounded shadow-sm">
            <p class="text-sm text-gray-500 mb-1">渲染位置</p>
            <p class="text-lg">{{ clientLocation }}</p>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
// 服务端数据
const serverTime = new Date().toLocaleString()

// 客户端数据
const clientTime = ref('加载中...')
const clientLocation = ref('加载中...')

// 在客户端挂载后更新数据
onMounted(() => {
  // 模拟加载延迟
  setTimeout(() => {
    clientTime.value = new Date().toLocaleString()
    clientLocation.value = '浏览器端'
  }, 1000)
})

// 添加页面元信息
useHead({
  title: '混合渲染示例',
  meta: [
    { name: 'description', content: '这是一个混合渲染的页面' }
  ]
})
</script> 