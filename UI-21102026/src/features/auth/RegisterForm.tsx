import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { ROUTES } from "../../constants/routes";
import {
  validateEmail,
  validateMobile,
  validatePassword,
  validateUsername,
} from "../../utils/validation";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      mobile: "",
      password: "",
    },

    onSubmit: async ({ value }) => {
      console.log("Register:", value);

      toast.success("Registration successful");

      navigate({
        to: ROUTES.AUTH.OTP,
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
        name="username"
        validators={{
          onChange: ({ value }) => validateUsername(value),
        }}
      >
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Username
            </label>

            <input
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) =>
                field.handleChange(event.target.value)
              }
              placeholder="Enter username"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
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
              onBlur={field.handleBlur}
              onChange={(event) =>
                field.handleChange(event.target.value)
              }
              placeholder="you@example.com"
              className="w-full rounded-xl border px-4 py-3 outline-none"
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
        name="mobile"
        validators={{
          onChange: ({ value }) => validateMobile(value),
        }}
      >
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Mobile Number
            </label>

            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) =>
                field.handleChange(event.target.value)
              }
              placeholder="9876543210"
              className="w-full rounded-xl border px-4 py-3 outline-none"
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
              onBlur={field.handleBlur}
              onChange={(event) =>
                field.handleChange(event.target.value)
              }
              placeholder="********"
              className="w-full rounded-xl border px-4 py-3 outline-none"
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
        className="w-full rounded-xl bg-black px-5 py-3 font-medium text-white"
      >
        Create Account
      </button>
    </form>
  );
};