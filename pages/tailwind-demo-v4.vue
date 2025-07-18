<script setup lang="ts">
const colors = [
  'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-gray-500'
]

const gradients = [
  'bg-gradient-to-r from-blue-500 to-purple-500',
  'bg-gradient-to-r from-green-400 to-blue-500',
  'bg-gradient-to-r from-pink-500 to-yellow-500',
  'bg-gradient-to-r from-red-500 to-pink-500'
]

const shadows = [
  'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl'
]

// 覆盖 Tailwind CSS 内部变量的方案
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (process.client) {
    // 更新 HTML 根元素的类名
    document.documentElement.className = isDark.value ? 'dark' : ''
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}

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
    
    // 应用主题
    document.documentElement.className = isDark.value ? 'dark' : ''
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
              覆盖 Tailwind CSS 内部变量方案
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
      <!-- 颜色展示 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          Tailwind 颜色系统（被内部变量覆盖）
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div 
            v-for="color in colors" 
            :key="color"
            :class="`${color} h-20 rounded-lg flex items-center justify-center text-white font-bold`"
          >
            {{ color.split('-')[1] }}
          </div>
        </div>
      </section>

      <!-- 卡片组件 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          覆盖 Tailwind 内部变量的卡片
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              覆盖 Tailwind 内部变量
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              直接覆盖 Tailwind 的 CSS 变量，保持原有的类名语法，但颜色值被自定义覆盖。
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              了解更多
            </button>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              优势说明
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              当前主题: <span class="font-bold">{{ isDark ? '暗色' : '亮色' }}</span>
            </p>
            <div class="space-y-2 text-sm">
              <p class="text-gray-500 dark:text-gray-400">✅ 保持 Tailwind 语法</p>
              <p class="text-gray-500 dark:text-gray-400">✅ 覆盖内部 CSS 变量</p>
              <p class="text-gray-500 dark:text-gray-400">✅ 无需修改 HTML</p>
              <p class="text-gray-500 dark:text-gray-400">✅ 完全兼容现有代码</p>
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

      <!-- 实现说明 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          实现原理说明
        </h2>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            覆盖 Tailwind CSS 内部变量
          </h3>
          <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>1. 直接覆盖 Tailwind 的 CSS 变量（如 --tw-bg-opacity, --tw-text-opacity 等）</p>
            <p>2. 保持原有的 Tailwind 类名语法</p>
            <p>3. 通过 CSS 变量实现主题切换</p>
            <p>4. 无需修改任何 HTML 代码</p>
            <p>5. 参考掘金文章的实现方式</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
/* 覆盖 Tailwind CSS 内部变量的方案 */

/* 亮色主题 - 覆盖 Tailwind 的默认变量 */
:root {
  /* 覆盖 Tailwind 的背景色变量 */
  --tw-bg-opacity: 1;
  --tw-bg-gray-50: 255 0 0;  /* 红色 - 测试用 */
  --tw-bg-gray-100: 243 244 246;
  --tw-bg-gray-200: 229 231 235;
  --tw-bg-gray-300: 209 213 219;
  --tw-bg-gray-400: 156 163 175;
  --tw-bg-gray-500: 107 114 128;
  --tw-bg-gray-600: 75 85 99;
  --tw-bg-gray-700: 55 65 81;
  --tw-bg-gray-800: 31 41 55;
  --tw-bg-gray-900: 17 24 39;
  --tw-bg-white: 255 255 255;
  
  /* 覆盖 Tailwind 的文字色变量 */
  --tw-text-opacity: 1;
  --tw-text-gray-50: 249 250 251;
  --tw-text-gray-100: 243 244 246;
  --tw-text-gray-200: 229 231 235;
  --tw-text-gray-300: 209 213 219;
  --tw-text-gray-400: 156 163 175;
  --tw-text-gray-500: 107 114 128;
  --tw-text-gray-600: 75 85 99;
  --tw-text-gray-700: 55 65 81;
  --tw-text-gray-800: 31 41 55;
  --tw-text-gray-900: 17 24 39;
  --tw-text-white: 255 255 255;
  
  /* 覆盖 Tailwind 的边框色变量 */
  --tw-border-opacity: 1;
  --tw-border-gray-200: 229 231 235;
  --tw-border-gray-300: 209 213 219;
  --tw-border-gray-600: 75 85 99;
  --tw-border-gray-700: 55 65 81;
  
  /* 覆盖 Tailwind 的功能色变量 */
  --tw-bg-blue-500: 59 130 246;
  --tw-bg-blue-600: 37 99 235;
  --tw-bg-blue-700: 29 78 216;
  --tw-text-blue-500: 59 130 246;
  --tw-text-blue-600: 37 99 235;
  --tw-text-blue-700: 29 78 216;
  
  /* 覆盖 Tailwind 的阴影变量 */
  --tw-shadow-color: 0 0 0;
  --tw-shadow-opacity: 0.1;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* 暗色主题 - 覆盖 Tailwind 的变量为暗色值 */
.dark {
  /* 覆盖 Tailwind 的背景色变量为暗色 */
  --tw-bg-opacity: 1;
  --tw-bg-gray-50: 255 255 0;  /* 黄色 - 测试用 */
  --tw-bg-gray-100: 31 41 55;
  --tw-bg-gray-200: 55 65 81;
  --tw-bg-gray-300: 75 85 99;
  --tw-bg-gray-400: 156 163 175;
  --tw-bg-gray-500: 107 114 128;
  --tw-bg-gray-600: 75 85 99;
  --tw-bg-gray-700: 55 65 81;
  --tw-bg-gray-800: 31 41 55;
  --tw-bg-gray-900: 17 24 39;
  --tw-bg-white: 31 41 55;      /* white 变成暗色 */
  
  /* 覆盖 Tailwind 的文字色变量为暗色 */
  --tw-text-opacity: 1;
  --tw-text-gray-50: 255 255 255;  /* 原来是暗色，现在变成亮色 */
  --tw-text-gray-100: 243 244 246;
  --tw-text-gray-200: 229 231 235;
  --tw-text-gray-300: 209 213 219;
  --tw-text-gray-400: 156 163 175;
  --tw-text-gray-500: 107 114 128;
  --tw-text-gray-600: 75 85 99;
  --tw-text-gray-700: 55 65 81;
  --tw-text-gray-800: 31 41 55;
  --tw-text-gray-900: 17 24 39;
  --tw-text-white: 255 255 255;
  
  /* 覆盖 Tailwind 的边框色变量为暗色 */
  --tw-border-opacity: 1;
  --tw-border-gray-200: 55 65 81;  /* 亮色边框变成暗色 */
  --tw-border-gray-300: 75 85 99;
  --tw-border-gray-600: 75 85 99;
  --tw-border-gray-700: 55 65 81;
  
  /* 覆盖 Tailwind 的功能色变量为暗色适配 */
  --tw-bg-blue-500: 96 165 250;    /* blue-400 在暗色下更亮 */
  --tw-bg-blue-600: 59 130 246;
  --tw-bg-blue-700: 37 99 235;
  --tw-text-blue-500: 96 165 250;
  --tw-text-blue-600: 59 130 246;
  --tw-text-blue-700: 37 99 235;
  
  /* 覆盖 Tailwind 的阴影变量为暗色 */
  --tw-shadow-color: 0 0 0;
  --tw-shadow-opacity: 0.3;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);
}
</style> 