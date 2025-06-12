<template>
  <div>
    <p class="text-green-600 mb-2">✅ 这个组件使用 useFetch，不会重复请求</p>
    <div v-if="pending" class="text-gray-500">加载中...</div>
    <div v-else-if="error" class="text-red-500">错误: {{ error }}</div>
    <div v-else>
      <p>当前时间: {{ data?.time }}</p>
      <p class="text-sm text-gray-600">请求次数: {{ data?.requestCount }}</p>
      <p class="text-sm text-blue-600">执行环境: {{ data?.environment }}</p>
      <p class="text-sm text-gray-500">{{ data?.message }}</p>
    </div>
  </div>
</template>

<script setup>
// ✅ 正确：使用 useFetch 会自动处理 SSR 和客户端水合
console.log('🟢 GoodFetchComponent: 开始请求数据', process.client ? '(客户端)' : '(服务端)')
const { data, pending, error } = await useFetch('/api/demo-data', {
  key: 'good-fetch-demo'
})
console.log('🟢 GoodFetchComponent: 请求完成', data.value)
</script> 