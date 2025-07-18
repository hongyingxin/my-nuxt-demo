<script setup lang="ts">
// import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()

// 使用 storeToRefs 来保持响应性
// import { storeToRefs } from 'pinia'
const { count, lastChanged, doubleCount, isPositive } = storeToRefs(store)
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">Pinia State Management Demo</h1>
    
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Counter with Pinia (持久化存储)</h2>
      
      <!-- 基本计数器 -->
      <div class="flex items-center gap-4 mb-4">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="store.decrement"
        >
          -
        </button>
        <span class="text-xl">{{ count }}</span>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="store.increment"
        >
          +
        </button>
        <button 
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          @click="store.incrementAsync"
        >
          Async +
        </button>
      </div>

      <!-- 派生状态（Getters） -->
      <div class="space-y-2 text-gray-600">
        <p>双倍值: {{ doubleCount }}</p>
        <p>是否为正数: {{ isPositive }}</p>
        <p v-if="lastChanged">最后修改时间: {{ lastChanged }}</p>
      </div>

      <!-- 持久化说明 -->
      <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h3 class="font-semibold text-yellow-800 mb-2">持久化存储演示</h3>
        <ul class="list-disc list-inside space-y-1 text-yellow-700">
          <li>刷新页面，计数器的值会保持不变</li>
          <li>关闭浏览器后重新打开，数据仍然存在</li>
          <li>使用 localStorage 存储，key 为 'my-counter-state'</li>
          <li>可以打开浏览器开发工具的 Application > Storage > Local Storage 查看存储的数据</li>
        </ul>
      </div>
    </div>

    <div class="mt-8 text-sm text-gray-600">
      <p>Pinia 特点展示：</p>
      <ul class="list-disc list-inside space-y-1">
        <li>支持同步和异步 actions</li>
        <li>TypeScript 支持</li>
        <li>Vue DevTools 支持</li>
        <li>自动计算的派生状态（Getters）</li>
        <li>模块化的状态管理</li>
        <li class="font-semibold text-green-600">支持状态持久化存储</li>
      </ul>
    </div>
  </div>
</template> 