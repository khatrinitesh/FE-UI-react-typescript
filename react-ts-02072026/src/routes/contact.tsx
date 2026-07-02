import { createFileRoute } from "@tanstack/react-router"

import { useState } from "react"
import { toast } from "sonner"
import Button from "../components/ui/Button"
import FieldInput from "../components/ui/FieldInput"
import FieldTextarea from "../components/ui/FieldTextarea"



export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

interface ContactFormData {
  fullName: string
  email: string
  mobile: string
  message: string
}

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  mobile: "",
  message: "",
}

function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.fullName.trim()) {
      toast.error("Full name is required")
      return
    }

    if (!formData.email.trim()) {
      toast.error("Email is required")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Enter a valid email address")
      return
    }

    if (!formData.mobile.trim()) {
      toast.error("Mobile number is required")
      return
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      toast.error("Enter a valid 10 digit mobile number")
      return
    }

    if (!formData.message.trim()) {
      toast.error("Message is required")
      return
    }

    toast.success("Form submitted successfully")
    setFormData(initialFormData)
  }

  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>

      <p className="mt-3 text-gray-600">
        Fill the form below and we will get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <FieldInput
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="Enter full name"
  maxLength={50}
  variant="color1"
  icon={<span>👤</span>}
  iconPosition="left"
/>

<FieldInput
  name="email"
  type="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter email id"
  maxLength={80}
  variant="color2"
  icon={<span>✉️</span>}
  iconPosition="left"
/>

<FieldInput
  name="mobile"
  type="tel"
  value={formData.mobile}
  onChange={handleChange}
  placeholder="Enter mobile number"
  maxLength={10}
  variant="color1"
  icon={<span>☎️</span>}
  iconPosition="right"
/>

<FieldTextarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Enter your message"
  maxLength={300}
  variant="color2"
  icon={<span>💬</span>}
  iconPosition="left"
/>

<Button
  type="submit"
  variant="color1"
  icon={<span>➜</span>}
  iconPosition="right"
>
  Submit
</Button>
      </form>
    </section>
  )
}