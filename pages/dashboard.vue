<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
          <h1 class="text-2xl font-bold mb-4">仪表盘</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold">总用户数</h3>
              <p class="text-3xl font-bold text-indigo-600">1,234</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold">今日访问</h3>
              <p class="text-3xl font-bold text-green-600">256</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold">待处理事项</h3>
              <p class="text-3xl font-bold text-yellow-600">12</p>
            </div>
          </div>
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