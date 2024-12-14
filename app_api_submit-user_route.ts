import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  const data = await request.json()
  
  // 在Vercel环境中，我们不能直接写入文件系统
  // 相反，我们将数据记录到控制台
  console.log('用户提交的数据:')
  console.log(JSON.stringify(data, null, 2))
  
  // 在实际的生产环境中，您可能想要将数据保存到数据库
  // 例如，使用Vercel的Postgres数据库或其他云数据库服务
  
  return NextResponse.json({ success: true })
}

