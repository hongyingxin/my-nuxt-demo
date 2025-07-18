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

// 主题切换功能
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  // 更新 HTML 的 class
  if (process.client) {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
}

// 监听系统主题偏好
onMounted(() => {
  if (process.client) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    document.documentElement.classList.toggle('dark', isDark.value)
  }
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDark ? 'bg-gray-900' : 'bg-gray-50'">
    <!-- 导航栏 -->
    <nav class="transition-colors duration-300" :class="isDark ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-lg'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">
              Tailwind CSS Demo
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <!-- 主题切换按钮 -->
            <button 
              @click="toggleTheme"
              class="p-2 rounded-lg transition-colors duration-300"
              :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'"
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
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">颜色系统</h2>
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

      <!-- 渐变展示 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">渐变效果</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="gradient in gradients" 
            :key="gradient"
            :class="`${gradient} h-32 rounded-lg flex items-center justify-center text-white font-bold text-xl`"
          >
            渐变背景
          </div>
        </div>
      </section>

      <!-- 阴影效果 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">阴影效果</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div 
            v-for="shadow in shadows" 
            :key="shadow"
            class="p-6 rounded-lg border transition-colors duration-300"
            :class="[
              shadow,
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            ]"
          >
            <p class="text-sm font-medium transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-900'">
              {{ shadow }}
            </p>
          </div>
        </div>
      </section>

      <!-- 按钮样式 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">按钮样式</h2>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            主要按钮
          </button>
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            次要按钮
          </button>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            成功按钮
          </button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            危险按钮
          </button>
          <button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
            边框按钮
          </button>
        </div>
      </section>

      <!-- 卡片组件 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">卡片组件</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="rounded-lg shadow-lg overflow-hidden transition-colors duration-300" :class="isDark ? 'bg-gray-800' : 'bg-white'">
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-32"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">卡片标题</h3>
              <p class="mb-4 transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-600'">这是一个使用 Tailwind CSS 构建的卡片组件示例。</p>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                了解更多
              </button>
            </div>
          </div>

          <div class="rounded-lg shadow-lg overflow-hidden transition-colors duration-300" :class="isDark ? 'bg-gray-800' : 'bg-white'">
            <div class="bg-gradient-to-r from-green-400 to-blue-500 h-32"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">响应式设计</h3>
              <p class="mb-4 transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-600'">这个卡片在不同屏幕尺寸下会自动调整布局。</p>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                查看详情
              </button>
            </div>
          </div>

          <div class="rounded-lg shadow-lg overflow-hidden transition-colors duration-300" :class="isDark ? 'bg-gray-800' : 'bg-white'">
            <div class="bg-gradient-to-r from-pink-500 to-yellow-500 h-32"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">现代化 UI</h3>
              <p class="mb-4 transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-600'">使用 Tailwind CSS 可以快速构建现代化的用户界面。</p>
              <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                开始使用
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 表单样式 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">表单样式</h2>
        <div class="max-w-md">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2 transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                用户名
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                :class="isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border border-gray-300'"
                placeholder="请输入用户名"
              >
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                邮箱
              </label>
              <input 
                type="email" 
                class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                :class="isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border border-gray-300'"
                placeholder="请输入邮箱"
              >
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                消息
              </label>
              <textarea 
                rows="4"
                class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                :class="isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border border-gray-300'"
                placeholder="请输入消息"
              ></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              提交
            </button>
          </form>
        </div>
      </section>

      <!-- 响应式网格 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">响应式网格</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <div 
            v-for="i in 12" 
            :key="i"
            class="p-4 rounded-lg shadow border text-center transition-colors duration-300"
            :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
          >
            <div class="text-2xl font-bold text-blue-500">{{ i }}</div>
            <div class="text-sm transition-colors duration-300" :class="isDark ? 'text-gray-400' : 'text-gray-600'">项目 {{ i }}</div>
          </div>
        </div>
      </section>

      <!-- 动画效果 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">动画效果</h2>
        <div class="flex flex-wrap gap-4">
          <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            颜色过渡
          </div>
          <div class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition-transform duration-300">
            缩放效果
          </div>
          <div class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transform hover:rotate-3 transition-transform duration-300">
            旋转效果
          </div>
          <div class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition-transform duration-300">
            上移效果
          </div>
        </div>
      </section>

      <!-- 主题切换说明 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">主题切换功能</h2>
        <div class="p-6 rounded-lg transition-colors duration-300" :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border border-gray-200'">
          <h3 class="text-lg font-semibold mb-4 transition-colors duration-300" :class="isDark ? 'text-white' : 'text-gray-900'">
            当前主题: {{ isDark ? '暗色' : '亮色' }}
          </h3>
          <p class="text-sm transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
            点击右上角的主题切换按钮可以在亮色和暗色主题之间切换。所有元素都会平滑过渡到新的主题。
          </p>
        </div>
      </section>
    </div>
  </div>
</template> 