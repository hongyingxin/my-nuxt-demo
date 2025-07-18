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

// 使用 CSS 变量的主题切换
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (process.client) {
    // 更新 HTML 根元素的类名
    document.documentElement.className = isDark.value ? 'theme-dark' : 'theme-light'
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
    document.documentElement.className = isDark.value ? 'theme-dark' : 'theme-light'
  }
})
</script>

<template>
  <div class="theme-container">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-content">
        <div class="nav-header">
          <h1 class="nav-title">Tailwind CSS Demo (CSS Variables)</h1>
        </div>
        <div class="nav-actions">
          <!-- 主题切换按钮 -->
          <button 
            @click="toggleTheme"
            class="theme-toggle"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <button class="btn-primary">登录</button>
        </div>
      </div>
    </nav>

    <div class="container">
      <!-- 颜色展示 -->
      <section class="section">
        <h2 class="section-title">颜色系统</h2>
        <div class="color-grid">
          <div 
            v-for="color in colors" 
            :key="color"
            :class="`${color} color-item`"
          >
            {{ color.split('-')[1] }}
          </div>
        </div>
      </section>

      <!-- 卡片组件 -->
      <section class="section">
        <h2 class="section-title">卡片组件</h2>
        <div class="card-grid">
          <div class="card">
            <div class="card-header gradient-blue"></div>
            <div class="card-body">
              <h3 class="card-title">CSS 变量实现</h3>
              <p class="card-text">使用 CSS 变量实现主题切换，更灵活且性能更好。</p>
              <button class="btn-primary">了解更多</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 表单样式 -->
      <section class="section">
        <h2 class="section-title">表单样式</h2>
        <div class="form-container">
          <form class="form">
            <div class="form-group">
              <label class="form-label">用户名</label>
              <input 
                type="text" 
                class="form-input"
                placeholder="请输入用户名"
              >
            </div>
            <button type="submit" class="btn-primary w-full">提交</button>
          </form>
        </div>
      </section>

      <!-- 实现说明 -->
      <section class="section">
        <h2 class="section-title">实现方式说明</h2>
        <div class="info-card">
          <h3 class="info-title">当前主题: {{ isDark ? '暗色' : '亮色' }}</h3>
          <div class="info-content">
            <p>✅ 使用 CSS 变量定义主题颜色</p>
            <p>✅ 通过类名切换主题</p>
            <p>✅ 自动保存到 localStorage</p>
            <p>✅ 更好的性能和可维护性</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
/* 全局 CSS 变量定义 */
:root {
  --bg-primary: #f9fafb;
  --bg-secondary: #ffffff;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
  --shadow-color: rgba(0, 0, 0, 0.1);
}

.theme-dark {
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --text-primary: #ffffff;
  --text-secondary: #d1d5db;
  --border-color: #374151;
  --shadow-color: rgba(0, 0, 0, 0.3);
}

.theme-light {
  --bg-primary: #f9fafb;
  --bg-secondary: #ffffff;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
/* 组件样式 */
.theme-container {
  min-height: 100vh;
  background-color: var(--bg-primary);
  transition: all 0.3s ease;
}

/* 导航栏样式 */
.navbar {
  background-color: var(--bg-secondary);
  box-shadow: 0 4px 6px -1px var(--shadow-color);
  transition: all 0.3s ease;
}

.nav-content {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.nav-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background-color: var(--border-color);
}

/* 按钮样式 */
.btn-primary {
  background-color: #3b82f6;
  color: white;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2563eb;
}

/* 容器样式 */
.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
}

/* 颜色网格 */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.color-item {
  height: 5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}

/* 卡片样式 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px var(--shadow-color);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-header {
  height: 8rem;
}

.gradient-blue {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.card-text {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

/* 表单样式 */
.form-container {
  max-width: 28rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.form-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder {
  color: var(--text-secondary);
}

/* 信息卡片 */
.info-card {
  background-color: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.info-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

/* 响应式设计 */
@media (min-width: 640px) {
  .nav-content {
    padding: 0 1.5rem;
  }
  
  .container {
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .nav-content {
    padding: 0 2rem;
  }
  
  .container {
    padding: 2rem 2rem;
  }
}
</style> 