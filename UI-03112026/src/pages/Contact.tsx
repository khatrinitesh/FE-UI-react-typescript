import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import {
    FiMail,
    FiMessageSquare,
    FiPhone,
    FiUser,
} from "react-icons/fi";
import { toast } from "sonner";
import { Button } from "../components/ui/Button";
import { FieldInput } from "../components/ui/FieldInput";
import { FieldTextarea } from "../components/ui/FieldTextarea";
import { LoadingOverlay } from "../components/ui/LoadingOverlay";
import {
    contactSchema,
    emailSchema,
    messageSchema,
    mobileSchema,
    nameSchema,
    validateField,
} from "../lib/validation";
import { apiError } from "../services/api";
import { submitContact } from "../services/comments";

export function ContactPage() {
  const mutation = useMutation({
    mutationFn: submitContact,
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },

    validators: {
      onSubmit: contactSchema,
    },

    onSubmit: async ({ value }) => {
      try {
        await mutation.mutateAsync(value);

        toast.success(
          "Demo submitted (JSONPlaceholder does not send emails)"
        );

        form.reset();
      } catch (error) {
        toast.error(apiError(error));
      }
    },
  });

  return (
    <section className="mx-auto max-w-xl">
      <h1 className="text-3xl font-bold">
        Contact us
      </h1>

      <p className="mt-2 text-zinc-600">
        This form demonstrates a mock POST request.
      </p>

      <form
        noValidate
        className="mt-8 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        {/* NAME */}

        <form.Field
          name="name"
          validators={{
            onBlur: ({ value }) =>
              validateField(nameSchema, value),
          }}
        >
          {(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>

              <FieldInput
                id={field.name}
                name={field.name}
                placeholder="Your name"
                autoComplete="name"
                maxLength={80}
                icon={<FiUser />}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                error={field.state.meta.errors.join(", ")}
              />

              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        {/* EMAIL */}

        <form.Field
          name="email"
          validators={{
            onBlur: ({ value }) =>
              validateField(emailSchema, value),
          }}
        >
          {(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <FieldInput
                id={field.name}
                name={field.name}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                icon={<FiMail />}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                error={field.state.meta.errors.join(", ")}
              />

              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        {/* MOBILE */}

        <form.Field
          name="mobile"
          validators={{
            onBlur: ({ value }) =>
              validateField(mobileSchema, value),
          }}
        >
          {(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Mobile
              </label>

              <FieldInput
                id={field.name}
                name={field.name}
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                placeholder="9876543210"
                icon={<FiPhone />}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                error={field.state.meta.errors.join(", ")}
              />

              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        {/* MESSAGE */}

        <form.Field
          name="message"
          validators={{
            onBlur: ({ value }) =>
              validateField(messageSchema, value),
          }}
        >
          {(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <FieldTextarea
                id={field.name}
                name={field.name}
                rows={5}
                maxLength={1000}
                placeholder="How can we help?"
                icon={<FiMessageSquare />}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                error={field.state.meta.errors.join(", ")}
              />

              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        {/* SUBMIT */}

        <form.Subscribe
          selector={(state) => [
            state.canSubmit,
            state.isSubmitting,
          ]}
        >
          {([canSubmit, submitting]) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!canSubmit}
              loading={
                submitting || mutation.isPending
              }
            >
              Submit message
            </Button>
          )}
        </form.Subscribe>
      </form>

      <LoadingOverlay
        visible={mutation.isPending}
        text="Sending your message…"
      />
    </section>
  );
}