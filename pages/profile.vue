<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow rounded-lg p-6">
          <h1 class="text-2xl font-bold mb-6">个人资料</h1>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">头像</label>
              <div class="mt-2 flex items-center">
                <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span class="text-xl font-bold text-gray-500">用户</span>
                </div>
                <button class="ml-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  更换头像
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">用户名</label>
              <input
                type="text"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="请输入用户名"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">邮箱</label>
              <input
                type="email"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="请输入邮箱"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">个人简介</label>
              <textarea
                rows="4"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="请输入个人简介"
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                保存更改
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