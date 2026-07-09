import { useForm } from "@tanstack/react-form"
import { createFileRoute } from "@tanstack/react-router"
import { Mail, MessageSquare, Phone, User } from "lucide-react"
import { toast } from "sonner"
import Button from "../components/ui/Button"
import FieldInput from "../components/ui/FieldInput"
import FieldTextarea from "../components/ui/FieldTextarea"
import MainLayout from "../layouts/MainLayout"

type ContactFormValues = {
  fullName: string
  email: string
  mobile: string
  message: string
}

function ContactPage() {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      message: "",
    } as ContactFormValues,

    onSubmit: async ({ value }) => {
      console.log(value)
      toast.success("Form submitted successfully!")
      form.reset()
    },
  })

  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          Fill the form below and we will get back to you.
        </p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          event.stopPropagation()
          form.handleSubmit()
        }}
        className="rounded-3xl bg-white p-6 shadow-xl md:p-8"
      >
        <div className="space-y-6">
          <form.Field
            name="fullName"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Full name is required"
                if (value.length < 3) {
                  return "Full name must be at least 3 characters"
                }
                return undefined
              },
            }}
          >
            {(field) => (
              <FieldInput
                label="Full Name"
                placeholder="Enter your full name"
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                maxLength={50}
                leftIcon={<User size={18} />}
                error={field.state.meta.errors[0]}
              />
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Email is required"

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                if (!emailRegex.test(value)) {
                  return "Enter a valid email address"
                }

                return undefined
              },
            }}
          >
            {(field) => (
              <FieldInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                maxLength={80}
                leftIcon={<Mail size={18} />}
                error={field.state.meta.errors[0]}
              />
            )}
          </form.Field>

          <form.Field
            name="mobile"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Mobile number is required"

                const mobileRegex = /^[0-9]{10}$/

                if (!mobileRegex.test(value)) {
                  return "Mobile number must be 10 digits"
                }

                return undefined
              },
            }}
          >
            {(field) => (
              <FieldInput
                label="Mobile Number"
                type="tel"
                placeholder="Enter your mobile number"
                value={field.state.value}
                onChange={(event) => {
                  const onlyNumbers = event.target.value.replace(/\D/g, "")
                  field.handleChange(onlyNumbers)
                }}
                onBlur={field.handleBlur}
                maxLength={10}
                leftIcon={<Phone size={18} />}
                error={field.state.meta.errors[0]}
              />
            )}
          </form.Field>

          <form.Field
            name="message"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Message is required"

                if (value.length < 10) {
                  return "Message must be at least 10 characters"
                }

                return undefined
              },
            }}
          >
            {(field) => (
              <FieldTextarea
                label="Message"
                placeholder="Write your message"
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                maxLength={300}
                leftIcon={<MessageSquare size={18} />}
                error={field.state.meta.errors[0]}
              />
            )}
          </form.Field>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={!canSubmit}
                className="w-full"
              >
                Submit Message
              </Button>
            )}
          </form.Subscribe>
        </div>
      </form>
    </section>
  )
}

export const Route = createFileRoute()({
  component: () => (
    <MainLayout>
      <ContactPage />
    </MainLayout>
  ),
})