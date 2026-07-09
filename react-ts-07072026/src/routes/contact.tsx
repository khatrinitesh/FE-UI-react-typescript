
import { useForm } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { toast } from 'sonner'
import { Button } from '../components/common/Button'
import { FieldInput } from '../components/common/FieldInput'
import { FieldTextarea } from '../components/common/FieldTextarea'
import { PageShell } from '../components/pages/PageShell'
import type { ContactFormValues } from '../interfaces/contact.interface'
import { contactService } from '../services/contact.service'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

function getError(errors: unknown[]) {
  return errors.length ? errors.map(String).join(', ') : undefined
}

function ContactPage() {
  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      await contactService.sendMessage(value)
      toast.success('Message sent successfully')
      form.reset()
    },
  })

  return (
    <PageShell
      eyebrow="Contact page"
      title="Contact form with TanStack Form"
      description="This form uses reusable FieldInput, FieldTextarea, Button, TanStack Form validation, Sonner toast, and a Fetch API POST service."
    >
      <form
        className="max-w-2xl space-y-5 rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        onSubmit={(event) => {
          event.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) => (value.trim().length < 2 ? 'Name must be at least 2 characters' : undefined),
          }}
        >
          {(field) => (
            <FieldInput
              label="Name"
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="Enter your name"
              error={getError(field.state.meta.errors)}
            />
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => (/^\S+@\S+\.\S+$/.test(value) ? undefined : 'Enter a valid email address'),
          }}
        >
          {(field) => (
            <FieldInput
              label="Email"
              name={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="name@example.com"
              error={getError(field.state.meta.errors)}
            />
          )}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) => (value.trim().length < 10 ? 'Message must be at least 10 characters' : undefined),
          }}
        >
          {(field) => (
            <FieldTextarea
              label="Message"
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="Write your message"
              error={getError(field.state.meta.errors)}
            />
          )}
        </form.Field>

        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button type="submit" loading={isSubmitting} disabled={!canSubmit}>
              Send message
            </Button>
          )}
        </form.Subscribe>
      </form>
    </PageShell>
  )
}
