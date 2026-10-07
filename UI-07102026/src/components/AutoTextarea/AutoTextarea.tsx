import { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

export default function AutoTextarea() {
  return (
    <>
    <MyForm/>
        <ChatInput/>
        <MessageBox/>
    </>
  )
}




function MessageBox() {
  const [message, setMessage] = useState('')

  return (
    <div className="max-w-md space-y-2">
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        minRows={2}
        maxRows={6}
        placeholder="Type your message..."
        className="w-full resize-none rounded-lg border px-3 py-2"
      />

      <p className="text-sm text-muted-foreground">
        {message.length} characters
      </p>
    </div>
  )
}

function ChatInput() {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!message.trim()) return

    console.log(message)
    setMessage('')
  }

  return (
    <div className="flex items-end gap-2 rounded-xl border p-2">
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        minRows={1}
        maxRows={5}
        placeholder="Message..."
        className="max-h-40 flex-1 resize-none bg-transparent px-2 py-2 outline-none"
      />

      <button
        onClick={handleSend}
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Send
      </button>
    </div>
  )
}



type FormValues = {
  description: string
}

function MyForm() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <TextareaAutosize
        {...register('description')}
        minRows={3}
        maxRows={10}
        placeholder="Enter description..."
        className="w-full resize-none rounded-md border px-3 py-2"
      />

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  )
}