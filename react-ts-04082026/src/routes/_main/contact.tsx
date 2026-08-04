import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Preloader } from "../../components/ui/Preloader";
import { Textarea } from "../../components/ui/Textarea";
import { Assets } from "../../utils/assets";

export const Route = createFileRoute("/_main/contact")({
  component: ContactPage,
});

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

// validate name
function validateName(value: string) {
  const name = value.trim();

  if (!name) {
    return "Full name is required.";
  }

  if (name.length < 2) {
    return "Full name must contain at least 2 characters.";
  }

  return undefined;
}
// validate email
function validateEmail(value: string) {
  const email = value.trim();

  if (!email) {
    return "Email address is required.";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Enter a valid email address.";
  }
  return undefined;
}
// validate message
function validateMessage(value: string) {
  const message = value.trim();
  if (!message) {
    return "Message is required.";
  }
  if (message.length < 10) {
    return "Message must contain at least 10 characters.";
  }
  return undefined;
}

function ContactPage() {
  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      // Replace this with your real API request.
      await new Promise((resolve) => {
        window.setTimeout(resolve, 1000);
      });
      console.log("Submitted values:", value);
      toast.success("Message sent successfully", {
        description: `Thank you, ${value.name}. We will contact you soon.`,
      });
      form.reset();
    },
  });

  return (
    <div className="contactPage p-4">
      <div className="container mx-auto px-4">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold text-slate-950">Contact Us</h1>

          <p className="mt-2 text-slate-600">
            Have any questions? Feel free to reach out to us!
          </p>

          <form
            noValidate
            className="mt-8 grid gap-5"
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();

              void form.handleSubmit();
            }}
          >
            {/* Full name */}
            <form.Field
              name="name"
              validators={{
                onChange: ({ value }) => validateName(value),
                onBlur: ({ value }) => validateName(value),
                onSubmit: ({ value }) => validateName(value),
              }}
            >
              {(field) => (
                <section className="grid gap-1.5">
                  <Input
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={field.state.value}
                    placeholder="Full name"
                    aria-label="Full name"
                    aria-describedby={`${field.name}-error`}
                    aria-invalid={field.state.meta.errors.length > 0}
                    icon={Assets.icons.user}
                    iconPosition="left"
                    maxLength={60}
                    autoComplete="name"
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      field.handleChange(event.target.value);
                    }}
                  />

                  {field.state.meta.errors[0] && (
                    <p
                      id={`${field.name}-error`}
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </section>
              )}
            </form.Field>

            {/* Email */}
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => validateEmail(value),
                onBlur: ({ value }) => validateEmail(value),
                onSubmit: ({ value }) => validateEmail(value),
              }}
            >
              {(field) => (
                <section className="grid gap-1.5">
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    placeholder="Email address"
                    aria-label="Email address"
                    aria-describedby={`${field.name}-error`}
                    aria-invalid={field.state.meta.errors.length > 0}
                    icon={Assets.icons.mail}
                    iconPosition="right"
                    maxLength={100}
                    autoComplete="email"
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      field.handleChange(event.target.value);
                    }}
                  />

                  {field.state.meta.errors[0] && (
                    <p
                      id={`${field.name}-error`}
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </section>
              )}
            </form.Field>

            {/* Message */}
            <form.Field
              name="message"
              validators={{
                onChange: ({ value }) => validateMessage(value),
                onBlur: ({ value }) => validateMessage(value),
                onSubmit: ({ value }) => validateMessage(value),
              }}
            >
              {(field) => (
                <section className="grid gap-1.5">
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    placeholder="Enter your message"
                    aria-label="Message"
                    aria-describedby={`${field.name}-error`}
                    aria-invalid={field.state.meta.errors.length > 0}
                    icon={Assets.icons.message}
                    iconPosition="left"
                    maxLength={500}
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      field.handleChange(event.target.value);
                    }}
                  />

                  <section className="flex items-start justify-between gap-4">
                    <span>
                      {field.state.meta.errors[0] && (
                        <p
                          id={`${field.name}-error`}
                          role="alert"
                          className="text-xs font-medium text-red-600"
                        >
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                    </span>

                    <p className="ml-auto text-xs text-slate-400">
                      {field.state.value.length}/500
                    </p>
                  </section>
                </section>
              )}
            </form.Field>

            {/* Submit button */}
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  icon={<Send size={18} />}
                  iconPosition="right"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  disabled={!canSubmit}
                  className="w-full"
                >
                  Submit
                </Button>
              )}
            </form.Subscribe>

            {/* Loading overlay */}
            <form.Subscribe selector={(state) => state.isSubmitting}>
              {(isSubmitting) => (
                <Preloader
                  show={isSubmitting}
                  overlay
                  label="Submitting contact form"
                />
              )}
            </form.Subscribe>
          </form>
        </div>
      </div>
    </div>
  );
}
