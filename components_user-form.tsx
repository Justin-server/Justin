import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserFormProps {
  onSubmit: (data: { name: string; age: string; contact: string }) => void
}

export function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, age, contact })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">名字</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="age">年龄</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="contact">联系方式</Label>
        <Input
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>
      <Button type="submit">提交</Button>
    </form>
  )
}

