<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">请求封装演示</h1>

    <!-- 基础请求示例 -->
    <div class="border p-4 rounded">
      <h2 class="text-xl font-semibold mb-4">基础请求示例</h2>
      <div class="space-y-4">
        <button 
          @click="testBasicRequest" 
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          测试基础请求
        </button>
        <div v-if="basicResult" class="bg-gray-100 p-3 rounded">
          <pre>{{ JSON.stringify(basicResult, null, 2) }}</pre>
        </div>
      </div>
    </div>

    <!-- API 服务示例 -->
    <div class="border p-4 rounded">
      <h2 class="text-xl font-semibold mb-4">API 服务示例</h2>
      <div class="space-y-4">
        <div class="flex space-x-4">
          <button 
            @click="testUserApi" 
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            获取用户列表
          </button>
          <button 
            @click="testCreateUser" 
            class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            创建用户
          </button>
        </div>
        <div v-if="apiResult" class="bg-gray-100 p-3 rounded">
          <pre>{{ JSON.stringify(apiResult, null, 2) }}</pre>
        </div>
      </div>
    </div>

    <!-- 错误处理示例 -->
    <div class="border p-4 rounded">
      <h2 class="text-xl font-semibold mb-4">错误处理示例</h2>
      <div class="space-y-4">
        <button 
          @click="testErrorHandling" 
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          测试错误处理
        </button>
        <div v-if="errorResult" class="bg-red-100 p-3 rounded">
          <pre>{{ errorResult }}</pre>
        </div>
      </div>
    </div>

    <!-- 文件上传示例 -->
    <div class="border p-4 rounded">
      <h2 class="text-xl font-semibold mb-4">文件上传示例</h2>
      <div class="space-y-4">
        <input 
          type="file" 
          @change="handleFileSelect" 
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        >
        <button 
          @click="testFileUpload" 
          :disabled="!selectedFile"
          class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
        >
          上传文件
        </button>
        <div v-if="uploadResult" class="bg-gray-100 p-3 rounded">
          <pre>{{ JSON.stringify(uploadResult, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { request } from '~/utils/request'

// 响应式数据
const basicResult = ref(null)
const apiResult = ref(null)
const errorResult = ref(null)
const uploadResult = ref(null)
const selectedFile = ref(null)

// 获取 API 服务
const { userApi, fileApi } = useApi()

// 基础请求测试
const testBasicRequest = async () => {
  try {
    basicResult.value = await request.get('/demo-data')
  } catch (error) {
    console.error('基础请求失败:', error)
  }
}

// API 服务测试
const testUserApi = async () => {
  try {
    // 模拟调用用户 API
    apiResult.value = {
      message: '用户 API 调用示例',
      note: '实际使用时会调用真实的 API 端点'
    }
  } catch (error) {
    console.error('用户 API 失败:', error)
  }
}

// 创建用户测试
const testCreateUser = async () => {
  try {
    // 模拟创建用户
    apiResult.value = {
      message: '创建用户示例',
      data: {
        name: '测试用户',
        email: 'test@example.com'
      }
    }
  } catch (error) {
    console.error('创建用户失败:', error)
  }
}

// 错误处理测试
const testErrorHandling = async () => {
  try {
    await request.get('/non-existent-endpoint')
  } catch (error) {
    errorResult.value = `错误: ${error.message}`
  }
}

// 文件选择处理
const handleFileSelect = (event) => {
  const target = event.target
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
  }
}

// 文件上传测试
const testFileUpload = async () => {
  if (!selectedFile.value) return
  
  try {
    uploadResult.value = {
      message: '文件上传示例',
      filename: selectedFile.value.name,
      size: selectedFile.value.size,
      note: '实际使用时会上传到真实的服务器'
    }
  } catch (error) {
    console.error('文件上传失败:', error)
  }
}
</script> 