import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    onSubmitInvalid: () => {
      toast.error("Please fix the highlighted fields before submitting.");
    },

    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Thank you, your enquiry has been sent.");
      console.log(value);
    },
  });

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold">Contact our school</h1>
      <form
        className="mt-10 space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          void form.handleSubmit();
        }}
      >
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) => (value.trim().length < 2 ? "Please enter your name" : undefined),
          }}
        >
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>

              <Input type="text" maxLength={50} placeholder="Your name" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} />

              {!field.state.meta.isValid && <p className="mt-1 text-sm text-red-600">{field.state.meta.errors.join(", ")}</p>}
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>

              <Input type="email" placeholder="you@example.com" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} />
            </div>
          )}
        </form.Field>

        <form.Field name="phone">
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium">Phone</label>

              <Input type="tel" maxLength={15} placeholder="+1 234 567 890" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} />
            </div>
          )}
        </form.Field>

        <form.Field name="message">
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>

              <Textarea rows={5} maxLength={500} placeholder="Write your message..." value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} />
            </div>
          )}
        </form.Field>

        <form.Subscribe selector={(state) => ({ isSubmitting: state.isSubmitting })}>
          {({ isSubmitting }) => (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send enquiry"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </section>
  );
}
