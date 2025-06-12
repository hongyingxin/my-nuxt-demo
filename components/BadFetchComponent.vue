<template>
  <div>
    <p class="text-red-600 mb-2">⚠️ 这个组件使用 $fetch，会导致重复请求</p>
    <div v-if="loading" class="text-gray-500">加载中...</div>
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
let loading = ref(true)
let error = ref(null)
let data = ref(null)

// ❌ 问题：使用 $fetch 会导致服务端和客户端都执行
try {
  console.log('🔴 BadFetchComponent: 开始请求数据', process.client ? '(客户端)' : '(服务端)')
  data.value = await $fetch('/api/demo-data')
  console.log('🔴 BadFetchComponent: 请求完成', data.value)
} catch (err) {
  error.value = err.message
  console.error('🔴 BadFetchComponent: 请求失败', err)
} finally {
  loading.value = false
}
</script> 