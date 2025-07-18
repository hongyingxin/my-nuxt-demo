// import { defineStore } from 'pinia'
// import { persistedState } from 'pinia-plugin-persistedstate'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    lastChanged: null as string | null,
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2,
    isPositive: (state) => state.count > 0
  },
  
  actions: {
    increment() {
      this.count++
      this.lastChanged = new Date().toLocaleString()
    },
    decrement() {
      this.count--
      this.lastChanged = new Date().toLocaleString()
    },
    async incrementAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.increment()
    }
  },

  // 配置持久化
  persist: {
    // 存储到 localStorage
    storage: piniaPluginPersistedstate.localStorage,
    // 自定义 key
    key: 'my-counter-state',
    
    // 指定要持久化的数据，可以是全部或部分状态
    paths: ['count', 'lastChanged'],
    
    // 在存储之前转换状态
    beforeRestore: (context) => {
      console.log('从存储中恢复之前：', context)
    },
    afterRestore: (context) => {
      console.log('从存储中恢复之后：', context)
    }
  }
}) 