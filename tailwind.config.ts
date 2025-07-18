import type { Config } from 'tailwindcss'

export default <Config> {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class', // 启用 class 策略的 dark 模式
  theme: {
    extend: {},
  },
  plugins: [],
} 