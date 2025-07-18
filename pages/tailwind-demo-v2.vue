<script setup lang="ts">
// 简化的主题切换逻辑
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (process.client) {
    // 直接操作 HTML 根元素的 class
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}

// 调试信息
const debugInfo = computed(() => {
  if (process.client) {
    return {
      htmlClass: document.documentElement.className,
      localStorageTheme: localStorage.getItem('theme')
    }
  }
  return {
    htmlClass: 'N/A',
    localStorageTheme: 'N/A'
  }
})

// 初始化主题
onMounted(() => {
  if (process.client) {
    // 检查 localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // 检查系统偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }
    
    // 应用主题到 HTML 根元素
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- 导航栏 -->
    <nav class="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Tailwind Dark Mode Test
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <!-- 主题切换按钮 -->
            <button 
              @click="toggleTheme"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-white transition-colors duration-300"
            >
              <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              登录
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <!-- 测试卡片 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          主题切换测试
        </h2>
        
        <!-- 测试卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              测试卡片 1
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              这是一个测试卡片，用于验证 Tailwind 的 dark 模式是否正常工作。
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              测试按钮
            </button>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              测试卡片 2
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              当前主题: <span class="font-bold">{{ isDark ? '暗色' : '亮色' }}</span>
            </p>
            <div class="space-y-2 text-sm">
              <p class="text-gray-500 dark:text-gray-400">✅ 背景色切换</p>
              <p class="text-gray-500 dark:text-gray-400">✅ 文字颜色切换</p>
              <p class="text-gray-500 dark:text-gray-400">✅ 边框颜色切换</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 表单测试 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          表单测试
        </h2>
        <div class="max-w-md">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                用户名
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="请输入用户名"
              >
            </div>
            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              提交
            </button>
          </form>
        </div>
      </section>

      <!-- 调试信息 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          调试信息
        </h2>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            当前状态
          </h3>
          <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>isDark: {{ isDark }}</p>
            <p>HTML class: {{ debugInfo.htmlClass }}</p>
            <p>localStorage theme: {{ debugInfo.localStorageTheme }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template> 