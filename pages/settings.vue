<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow rounded-lg p-6">
          <h1 class="text-2xl font-bold mb-6">设置</h1>
          
          <div class="space-y-6">
            <!-- 通知设置 -->
            <div>
              <h3 class="text-lg font-medium text-gray-900">通知设置</h3>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input
                    id="email-notifications"
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="email-notifications" class="ml-3 block text-sm font-medium text-gray-700">
                    接收邮件通知
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="push-notifications"
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="push-notifications" class="ml-3 block text-sm font-medium text-gray-700">
                    接收推送通知
                  </label>
                </div>
              </div>
            </div>

            <!-- 隐私设置 -->
            <div>
              <h3 class="text-lg font-medium text-gray-900">隐私设置</h3>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input
                    id="profile-visibility"
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="profile-visibility" class="ml-3 block text-sm font-medium text-gray-700">
                    公开个人资料
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="activity-status"
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="activity-status" class="ml-3 block text-sm font-medium text-gray-700">
                    显示在线状态
                  </label>
                </div>
              </div>
            </div>

            <!-- 安全设置 -->
            <div>
              <h3 class="text-lg font-medium text-gray-900">安全设置</h3>
              <div class="mt-4 space-y-4">
                <button class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  修改密码
                </button>
                <button class="ml-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  开启两步验证
                </button>
              </div>
            </div>

            <div class="flex justify-end">
              <button class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                保存设置
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 