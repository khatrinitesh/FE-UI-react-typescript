import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { MainLayout } from "../components/MainLayout";
import { Button, FieldInput, FieldTextarea } from "../components/form-fields";
export const Route = createFileRoute("/contact")({ component: Contact });
function Contact() {
  const form = useForm({
    defaultValues: { name: "", email: "", message: "" },
    onSubmit: async ({ value }) => {
      toast.success(
        `Thanks, ${value.name || "there"} — we received your message.`,
      );
      form.reset();
    },
  });
  return (
    <MainLayout>
      <p className="text-sm font-bold uppercase tracking-[.22em] text-amber-300">
        Contact
      </p>
      <h1 className="mt-4 text-5xl font-black">Let’s talk.</h1>
      <form
        className="mt-10 max-w-xl space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) =>
              value.length > 50 ? "Maximum 50 characters" : undefined,
          }}
        >
          {(field) => (
            <>
              <FieldInput
                label="Name"
                name={field.name}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                maxLength={50}
                placeholder="Your name"
              />
              {field.state.meta.errors[0] && (
                <p className="text-xs text-red-400">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </>
          )}
        </form.Field>
        <form.Field name="email">
          {(field) => (
            <FieldInput
              label="Email"
              type="email"
              name={field.name}
              value={field.state.value}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="you@example.com"
            />
          )}
        </form.Field>
        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) =>
              value.length > 500 ? "Maximum 500 characters" : undefined,
          }}
        >
          {(field) => (
            <FieldTextarea
              label="Message"
              name={field.name}
              value={field.state.value}
              onChange={(event) => field.handleChange(event.target.value)}
              maxLength={500}
              placeholder="Write up to 500 characters"
            />
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </MainLayout>
  );
}
