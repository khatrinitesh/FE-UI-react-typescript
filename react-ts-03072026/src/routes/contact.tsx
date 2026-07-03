import { useForm } from "@tanstack/react-form"
import { createFileRoute } from "@tanstack/react-router"
import { Mail, MessageSquare, Phone, User } from "lucide-react"
import { toast } from "sonner"


import Button from "../components/ui/Button"
import FieldInput from "../components/ui/FieldInput"
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validateMobileNumber,
} from "../utils/validation"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

type ContactFormValues = {
  fullName: string
  email: string
  mobileNumber: string
  message: string
}

function ContactPage() {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    } as ContactFormValues,

    onSubmit: async ({ value }) => {
      console.log(value)

      toast.success("Form submitted successfully!")
      form.reset()
    },
  })

  return (
    <section className="mx-auto max-w-3xl px-5 py-12">
      <div className="container">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
        <h1 className="mb-2 text-4xl font-bold text-slate-950">
          Contact Page
        </h1>

        <p className="mb-8 text-slate-600">
          Please fill out the form below.
        </p>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <form.Field
            name="fullName"
            validators={{
              onChange: ({ value }) => validateFullName(value),
            }}
          >
            {(field) => (
              <FieldInput
                label="Full Name"
                placeholder="Enter full name"
                value={field.state.value}
                maxLength={40}
                icon={<User className="size-4" />}
                iconPosition="left"
                error={field.state.meta.errors[0]}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => validateEmail(value),
            }}
          >
            {(field) => (
              <FieldInput
                label="Email"
                placeholder="Enter email address"
                value={field.state.value}
                maxLength={60}
                icon={<Mail className="size-4" />}
                iconPosition="left"
                error={field.state.meta.errors[0]}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            )}
          </form.Field>

          <form.Field
            name="mobileNumber"
            validators={{
              onChange: ({ value }) => validateMobileNumber(value),
            }}
          >
            {(field) => (
              <FieldInput
                label="Mobile Number"
                placeholder="Enter mobile number"
                value={field.state.value}
                maxLength={10}
                icon={<Phone className="size-4" />}
                iconPosition="left"
                error={field.state.meta.errors[0]}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "")
                  field.handleChange(onlyNumbers)
                }}
                onBlur={field.handleBlur}
              />
            )}
          </form.Field>

          <form.Field
            name="message"
            validators={{
              onChange: ({ value }) => validateMessage(value),
            }}
          >
            {(field) => (
              <FieldInput
                label="Message"
                placeholder="Enter your message"
                value={field.state.value}
                maxLength={200}
                icon={<MessageSquare className="size-4" />}
                iconPosition="left"
                error={field.state.meta.errors[0]}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            )}
          </form.Field>

          <Button type="submit" variant="color2" className="w-full">
            Submit
          </Button>
        </form>
      </div>
      </div>
    </section>
  )
}