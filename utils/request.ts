import type { FetchOptions } from 'ofetch'
import type { NitroFetchRequest } from 'nitropack'

// 请求配置接口
interface RequestConfig {
  // 基础配置
  headers?: Record<string, string>
  query?: Record<string, any>
  body?: any
  timeout?: number
  
  // 自定义配置
  showLoading?: boolean
  showError?: boolean
  onError?: (error: any) => void
  onSuccess?: (data: any) => void
}

// 响应数据接口
interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
  success: boolean
}

// 请求类
class Request {
  private baseURL: string
  private defaultConfig: RequestConfig

  constructor(baseURL = '/api', defaultConfig: RequestConfig = {}) {
    this.baseURL = baseURL
    this.defaultConfig = {
      showLoading: false,
      showError: true,
      ...defaultConfig
    }
  }

  // 请求拦截器
  private async beforeRequest(url: string, config: RequestConfig) {
    // 处理 URL
    const fullUrl = url.startsWith('http') ? url : `${this.baseURL}${url}`
    
    // 合并配置
    const finalConfig = { ...this.defaultConfig, ...config }
    
    // 设置默认请求头
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...finalConfig.headers
    }

    // 如果是客户端且需要认证，添加 token
    if (process.client) {
      const token = useCookie('auth-token')
      if (token.value) {
        headers.Authorization = `Bearer ${token.value}`
      }
    }

    return { 
      url: fullUrl, 
      config: {
        ...finalConfig,
        headers
      }
    }
  }

  // 响应拦截器
  private async afterRequest<T>(data: any, config: RequestConfig): Promise<T> {
    // 调用成功回调
    if (config.onSuccess) {
      config.onSuccess(data)
    }

    return data
  }

  // 错误处理
  private async handleError(error: any, config: RequestConfig) {
    console.error('请求错误:', error)

    // 自定义错误处理
    if (config.onError) {
      config.onError(error)
      return
    }

    // 默认错误处理
    if (config.showError && process.client) {
      console.error('请求失败:', error.message || '网络错误')
    }

    // 根据错误状态码处理
    if (error.response?.status === 401) {
      // 未认证，跳转到登录页
      if (process.client) {
        await navigateTo('/login')
      }
    }

    throw error
  }

  // 基础请求方法
  private async request<T = any>(
    url: string,
    method: string,
    config: RequestConfig = {}
  ): Promise<T> {
    try {
      const { url: fullUrl, config: finalConfig } = await this.beforeRequest(url, config)
      
      // 构建 $fetch 选项
      const fetchOptions: any = {
        method,
        headers: finalConfig.headers,
        query: finalConfig.query,
        timeout: finalConfig.timeout
      }

      // 如果有请求体且不是 GET 请求
      if (finalConfig.body && method !== 'GET') {
        fetchOptions.body = finalConfig.body
      }
      
      // 发起请求
      const data = await $fetch<T>(fullUrl, fetchOptions)
      
      return await this.afterRequest<T>(data, finalConfig)
    } catch (error) {
      await this.handleError(error, config)
      throw error
    }
  }

  // GET 请求
  get<T = any>(url: string, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(url, 'GET', config)
  }

  // POST 请求
  post<T = any>(url: string, data?: any, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(url, 'POST', { ...config, body: data })
  }

  // PUT 请求
  put<T = any>(url: string, data?: any, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(url, 'PUT', { ...config, body: data })
  }

  // DELETE 请求
  delete<T = any>(url: string, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(url, 'DELETE', config)
  }

  // PATCH 请求
  patch<T = any>(url: string, data?: any, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(url, 'PATCH', { ...config, body: data })
  }

  // 文件上传
  upload<T = any>(url: string, formData: FormData, config: RequestConfig = {}): Promise<T> {
    // 文件上传时移除 Content-Type，让浏览器自动设置
    const uploadConfig = { ...config }
    if (uploadConfig.headers) {
      const { 'Content-Type': _, ...otherHeaders } = uploadConfig.headers
      uploadConfig.headers = otherHeaders
    }
    
    return this.request<T>(url, 'POST', { ...uploadConfig, body: formData })
  }
}

// 创建默认实例
export const request = new Request()

// 导出类以便创建自定义实例
export { Request }
export type { RequestConfig, ApiResponse } 