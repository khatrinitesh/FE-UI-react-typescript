import {
    Send,
} from "lucide-react"
import {
    useState,
    type FormEvent,
} from "react"
import MotionBox from "../components/common/MotionBox"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Textarea from "../components/ui/Textarea"
import { notifyDanger, notifySuccess } from "../utils/notify"
import { isValidEmail, isValidPhone } from "../utils/validation"




type ContactForm = {
  name: string
  email: string
  phone: string
  message: string
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export default function ContactPage() {
  const [form, setForm] =
    useState<ContactForm>(initialForm)

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (!form.name.trim()) {
      notifyDanger("Please enter your name")
      return
    }

    if (!isValidEmail(form.email)) {
      notifyDanger(
        "Please enter a valid email address"
      )
      return
    }

    if (
      form.phone &&
      !isValidPhone(form.phone)
    ) {
      notifyDanger(
        "Please enter a valid phone number"
      )
      return
    }

    if (!form.message.trim()) {
      notifyDanger(
        "Please enter your message"
      )
      return
    }

    notifySuccess(
      "Message submitted successfully"
    )

    setForm(initialForm)
  }

  return (
    <>
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <MotionBox className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
              Contact
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Get in touch with us.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Have a question about the college
              platform? Send us a message and
              we'll help you with what you need.
            </p>
          </MotionBox>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <MotionBox
            delay={0.08}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid gap-6"
            >
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                aria-label="Name"
                value={form.name}
                maxLength={100}
                required
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
              />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                value={form.email}
                maxLength={150}
                required
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              />

              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                aria-label="Phone"
                value={form.phone}
                maxLength={15}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    phone: event.target.value,
                  }))
                }
              />

              <Textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                aria-label="Message"
                value={form.message}
                rows={6}
                maxLength={1000}
                required
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    message: event.target.value,
                  }))
                }
              />

              <Button
                type="submit"
                variant="primary"
                icon={<Send size={18} />}
                iconPosition="right"
              >
                Send message
              </Button>
            </form>
          </MotionBox>
        </div>
      </section>
    </>
  )
}