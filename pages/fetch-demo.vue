<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">数据获取演示</h1>
    
    <!-- 使用 $fetch 的组件 -->
    <div class="border p-4 rounded">
      <h2 class="text-xl font-semibold mb-4">使用 $fetch（会重复请求）</h2>
      <BadFetchComponent />
    </div>
    
    <!-- 使用 useFetch 的组件 -->
    <div class="border p-4 rounded">
      <h2 class="text-xl font-semibold mb-4">使用 useFetch（不会重复请求）</h2>
      <GoodFetchComponent />
    </div>
  </div>
</template>

<script setup>
// 页面元数据
definePageMeta({
  title: '数据获取演示'
})
</script> 