import { useForm } from "@tanstack/react-form";
import { Mail, MessageSquare, User } from "lucide-react";
import { toast } from "sonner";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Textarea from "../components/common/Textarea";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },

    onSubmit: async ({ value }) => {
      toast.success("Message submitted successfully!", {
        description: `Thank you ${value.name}.`,
      });

      form.reset();
    },
  });

  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <form
        className="mt-10 space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          form.handleSubmit();
        }}
      >
        {/* Name */}
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) =>
              !value.trim()
                ? "Name is required"
                : value.length < 2
                  ? "Name must be at least 2 characters"
                  : undefined,
          }}
        >
          {(field) => (
            <fieldset className="space-y-2">
              <Input
                type="text"
                placeholder="Enter your name"
                maxLength={50}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                icon={<User size={18} />}
                iconPosition="left"
              />

              {field.state.meta.errors.map((error) => (
                <p key={error} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
            </fieldset>
          )}
        </form.Field>

        {/* Email */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value.trim()) {
                return "Email is required";
              }

              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return "Enter a valid email";
              }

              return undefined;
            },
          }}
        >
          {(field) => (
            <fieldset className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                maxLength={100}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                icon={<Mail size={18} />}
                iconPosition="left"
              />

              {field.state.meta.errors.map((error) => (
                <p key={error} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
            </fieldset>
          )}
        </form.Field>

        {/* Message */}
        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) =>
              !value.trim()
                ? "Message is required"
                : value.length < 10
                  ? "Message must be at least 10 characters"
                  : undefined,
          }}
        >
          {(field) => (
            <fieldset className="space-y-2">
              <Textarea
                placeholder="Enter your message"
                maxLength={500}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                icon={<MessageSquare size={18} />}
                iconPosition="left"
              />

              <p className="text-right text-xs text-gray-400">
                {field.state.value.length}/500
              </p>

              {field.state.meta.errors.map((error) => (
                <p key={error} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
            </fieldset>
          )}
        </form.Field>

        <Button
          type="submit"
          className="w-full rounded-lg bg-black px-5 py-3 text-white"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default Contact;
