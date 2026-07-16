import { useForm } from '@tanstack/react-form'
import { Mail, Phone, User } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../components/Button'
import { FieldInput } from '../components/FieldInput'
import { FieldTextarea } from '../components/FieldTextarea'

export function ContactPage() {
  const [success, setSuccess] = useState(false)

  const form = useForm({
    defaultValues: {
      fullName: '',
      mobile: '',
      message: '',
    },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 700))
      console.log(value)
      setSuccess(true)
    },
  })

  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl rounded-3xl border bg-white p-6 shadow-xl md:p-10">
        <h1 className="text-4xl font-black">Contact us</h1>

        <form
          className="mt-8 grid gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            void form.handleSubmit()
          }}
        >
          <form.Field
            name="fullName"
            validators={{
              onChange: ({ value }) =>
                value.trim().length < 3
                  ? 'Full name must contain at least 3 characters.'
                  : undefined,
            }}
          >
            {(field) => (
              <FieldInput
                label="Full name"
                icon={<User size={18} />}
                maxLength={60}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.isTouched ? field.state.meta.errors[0] : undefined}
              />
            )}
          </form.Field>

          <form.Field
            name="mobile"
            validators={{
              onChange: ({ value }) =>
                !/^[6-9]\d{9}$/.test(value)
                  ? 'Enter a valid 10-digit Indian mobile number.'
                  : undefined,
            }}
          >
            {(field) => (
              <FieldInput
                label="Mobile number"
                icon={<Phone size={18} />}
                inputMode="numeric"
                maxLength={10}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value.replace(/\D/g, ''))}
                error={field.state.meta.isTouched ? field.state.meta.errors[0] : undefined}
              />
            )}
          </form.Field>

          <form.Field
            name="message"
            validators={{
              onChange: ({ value }) =>
                value.trim().length < 10
                  ? 'Message must contain at least 10 characters.'
                  : undefined,
            }}
          >
            {(field) => (
              <FieldTextarea
                label="Message"
                icon={<Mail size={18} />}
                maxLength={500}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.isTouched ? field.state.meta.errors[0] : undefined}
              />
            )}
          </form.Field>

          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Button type="submit" enabled={canSubmit} loading={isSubmitting}>
                Send message
              </Button>
            )}
          </form.Subscribe>

          {success && (
            <p className="text-sm font-medium text-emerald-600">
              Message submitted successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
