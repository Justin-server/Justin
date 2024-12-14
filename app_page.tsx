'use client'

import { useState } from 'react'
import { UserForm } from '@/components/user-form'
import { ThankYou } from '@/components/thank-you'
import { Fireworks } from '@/components/fireworks'

interface UserData {
  name: string;
  age: string;
  contact: string;
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (data: UserData) => {
    try {
      const response = await fetch('/api/submit-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
        }, 5000) // 5秒后重置表单
      } else {
        console.error('提交失败')
      }
    } catch (error) {
      console.error('提交出错', error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md">
        {!submitted ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">用户信息收集</h1>
            <UserForm onSubmit={handleSubmit} />
          </>
        ) : (
          <>
            <ThankYou />
            <Fireworks />
          </>
        )}
      </div>
    </main>
  )
}

