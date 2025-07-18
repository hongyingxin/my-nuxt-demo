<script setup lang="ts">
const counter = useState('counter', () => 0)
const color = useState('color', () => '#ff0000')

const increment = () => counter.value++
const decrement = () => counter.value--
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">State Management Demo</h1>
    
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Counter Example</h2>
      <div class="flex items-center gap-4">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="decrement"
        >
          -
        </button>
        <span class="text-xl">{{ counter }}</span>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="increment"
        >
          +
        </button>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Shared Color State</h2>
      <div class="flex items-center gap-4">
        <input 
          type="color" 
          v-model="color"
          class="w-20 h-10"
        >
        <span>Selected color: {{ color }}</span>
      </div>
      <div 
        class="mt-4 p-4 rounded"
        :style="{ backgroundColor: color }"
      >
        This box's color is controlled by the shared state
      </div>
    </div>

    <div class="mt-8 text-sm text-gray-600">
      <p>Note: The state is shared across components and persists through page navigation.</p>
      <p>Try opening this page in multiple tabs to see the state sync!</p>
    </div>
  </div>
</template> 