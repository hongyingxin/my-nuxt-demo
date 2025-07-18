export const useTheme = () => {
  // 主题状态
  const theme = useState<'light' | 'dark'>('theme', () => 'light')
  
  // 切换主题
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    updateTheme()
  }
  
  // 设置主题
  const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme
    updateTheme()
  }
  
  // 更新 DOM 和 CSS 变量
  const updateTheme = () => {
    if (process.client) {
      // 更新 HTML 的 class
      document.documentElement.classList.toggle('dark', theme.value === 'dark')
      
      // 更新 CSS 变量
      const root = document.documentElement
      if (theme.value === 'dark') {
        root.style.setProperty('--bg-primary', '#111827')
        root.style.setProperty('--bg-secondary', '#1f2937')
        root.style.setProperty('--text-primary', '#ffffff')
        root.style.setProperty('--text-secondary', '#d1d5db')
        root.style.setProperty('--border-color', '#374151')
      } else {
        root.style.setProperty('--bg-primary', '#f9fafb')
        root.style.setProperty('--bg-secondary', '#ffffff')
        root.style.setProperty('--text-primary', '#111827')
        root.style.setProperty('--text-secondary', '#6b7280')
        root.style.setProperty('--border-color', '#e5e7eb')
      }
    }
  }
  
  // 初始化主题
  const initTheme = () => {
    if (process.client) {
      // 检查 localStorage
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      if (savedTheme) {
        setTheme(savedTheme)
      } else {
        // 检查系统偏好
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(prefersDark ? 'dark' : 'light')
      }
    }
  }
  
  // 监听主题变化并保存
  watch(theme, (newTheme) => {
    if (process.client) {
      localStorage.setItem('theme', newTheme)
    }
  })
  
  // 监听系统主题变化
  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light')
    }
  }
  
  onMounted(() => {
    initTheme()
    
    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    
    // 清理监听器
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    })
  })
  
  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme,
    isDark: computed(() => theme.value === 'dark')
  }
} 