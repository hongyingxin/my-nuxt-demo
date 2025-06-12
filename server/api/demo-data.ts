// 用于跟踪请求次数的全局变量
let requestCount = 0

export default defineEventHandler(async (event) => {
  requestCount++
  
  // 判断是服务端还是客户端请求
  const isServer = process.server
  const userAgent = getHeader(event, 'user-agent') || 'unknown'
  
  console.log(`🔥 API 被调用第 ${requestCount} 次`)
  console.log(`📍 执行环境: ${isServer ? '服务端' : '客户端'}`)
  console.log(`🌐 User-Agent: ${userAgent.substring(0, 50)}...`)
  console.log('---')
  
  // 模拟一些处理时间
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return {
    time: new Date().toISOString(),
    requestCount,
    environment: isServer ? 'server' : 'client',
    message: `这是第 ${requestCount} 次请求 (${isServer ? '服务端' : '客户端'})`
  }
}) 