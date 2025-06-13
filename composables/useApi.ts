import { request } from '~/utils/request'

// 用户相关接口
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

// API 服务
export const useApi = () => {
  // 用户相关 API
  const userApi = {
    // 获取用户列表
    getUsers: (params?: { page?: number; size?: number }) => {
      return request.get<{ list: User[]; total: number }>('/users', {
        query: params
      })
    },

    // 获取单个用户
    getUser: (id: number) => {
      return request.get<User>(`/users/${id}`)
    },

    // 创建用户
    createUser: (data: Omit<User, 'id'>) => {
      return request.post<User>('/users', data)
    },

    // 更新用户
    updateUser: (id: number, data: Partial<User>) => {
      return request.put<User>(`/users/${id}`, data)
    },

    // 删除用户
    deleteUser: (id: number) => {
      return request.delete<void>(`/users/${id}`)
    }
  }

  // 认证相关 API
  const authApi = {
    // 登录
    login: (credentials: { email: string; password: string }) => {
      return request.post<{ token: string; user: User }>('/auth/login', credentials)
    },

    // 注册
    register: (data: { name: string; email: string; password: string }) => {
      return request.post<{ token: string; user: User }>('/auth/register', data)
    },

    // 获取当前用户信息
    me: () => {
      return request.get<User>('/auth/me')
    },

    // 登出
    logout: () => {
      return request.post<void>('/auth/logout')
    }
  }

  // 文件上传 API
  const fileApi = {
    // 上传单个文件
    uploadFile: (file: File) => {
      const formData = new FormData()
      formData.append('file', file)
      return request.upload<{ url: string; filename: string }>('/upload', formData)
    },

    // 上传多个文件
    uploadFiles: (files: File[]) => {
      const formData = new FormData()
      files.forEach(file => formData.append('files', file))
      return request.upload<{ urls: string[]; filenames: string[] }>('/upload/multiple', formData)
    }
  }

  return {
    userApi,
    authApi,
    fileApi
  }
} 