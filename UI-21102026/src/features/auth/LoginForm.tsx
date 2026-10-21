import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { ROUTES } from "../../constants/routes";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validation";

export const LoginForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    onSubmit: async ({ value }) => {
      console.log("Login:", value);

      toast.success("Login successful");

      navigate({
        to: ROUTES.HOME,
      });
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
      className="space-y-5"
    >
      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) => validateEmail(value),
        }}
      >
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={field.state.value}
              onChange={(event) =>
                field.handleChange(event.target.value)
              }
              onBlur={field.handleBlur}
              placeholder="you@example.com"
              className="w-full rounded-xl border px-4 py-3"
            />

            {field.state.meta.errors[0] && (
              <p className="mt-1 text-sm text-red-500">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) => validatePassword(value),
        }}
      >
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              value={field.state.value}
              onChange={(event) =>
                field.handleChange(event.target.value)
              }
              onBlur={field.handleBlur}
              placeholder="********"
              className="w-full rounded-xl border px-4 py-3"
            />

            {field.state.meta.errors[0] && (
              <p className="mt-1 text-sm text-red-500">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        className="w-full rounded-xl bg-black px-5 py-3 text-white"
      >
        Login
      </button>
    </form>
  );
};