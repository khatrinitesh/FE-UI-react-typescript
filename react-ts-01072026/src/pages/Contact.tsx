
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import FieldInput from "../components/ui/FieldInput"

const Contact = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Contact form data:", value)
      toast.success("Form submitted successfully!")
      form.reset()
    },
  })

  return (
    <div className="contactPage">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="mb-2 text-3xl font-bold">Contact Us</h1>
          <p className="mb-8 text-gray-600">
            Fill the form below and we will get back to you soon.
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
                onChange: ({ value }) => {
                  if (!value.trim()) return "Full name is required"
                  if (value.length < 3) return "Full name must be at least 3 characters"
                  return undefined
                },
              }}
            >
              {(field) => (
                <FieldInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.errors[0]}
                />
              )}
            </form.Field>

            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if (!value.trim()) return "Email is required"

                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                  if (!emailRegex.test(value)) return "Enter a valid email address"

                  return undefined
                },
              }}
            >
              {(field) => (
                <FieldInput
                  label="Email ID"
                  placeholder="Enter your email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.errors[0]}
                />
              )}
            </form.Field>

            <form.Field
              name="mobileNumber"
              validators={{
                onChange: ({ value }) => {
                  if (!value.trim()) return "Mobile number is required"

                  const mobileRegex = /^[6-9]\d{9}$/

                  if (!mobileRegex.test(value)) {
                    return "Enter a valid 10 digit mobile number"
                  }

                  return undefined
                },
              }}
            >
              {(field) => (
                <FieldInput
                  label="Mobile Number"
                  placeholder="Enter your mobile number"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.errors[0]}
                />
              )}
            </form.Field>

            <form.Field
              name="message"
              validators={{
                onChange: ({ value }) => {
                  if (!value.trim()) return "Message is required"
                  if (value.length < 10) return "Message must be at least 10 characters"
                  return undefined
                },
              }}
            >
              {(field) => (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Enter your message"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className={`w-full resize-none rounded-lg border px-4 py-2 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 ${
                      field.state.meta.errors[0]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  {field.state.meta.errors[0] && (
                    <p className="text-xs text-red-600">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            <button
              type="submit"
              className="w-full rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact