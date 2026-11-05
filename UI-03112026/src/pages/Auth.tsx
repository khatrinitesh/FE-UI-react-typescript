import { useForm } from "@tanstack/react-form";
import {
    Link,
    useNavigate,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "../components/ui/Button";
import { FieldInput } from "../components/ui/FieldInput";
import {
    emailSchema,
    loginSchema,
    mobileSchema,
    nameSchema,
    otpSchema,
    passwordSchema,
    registerSchema,
    validateField,
    verifyOtpSchema,
} from "../lib/validation";

function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="mb-7 mt-2 text-sm text-zinc-500">
        {subtitle}
      </p>

      {children}
    </section>
  );
}

function AuthField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">
        {label}
      </p>

      {children}

      {error && (
        <p
          role="alert"
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// LOGIN PAGE
export function LoginPage() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: async () => {
      toast.info(
        "Demo only: no authentication backend is configured"
      );

      await navigate({ to: "/otp" });
    },
  });

  return (
    <AuthShell
      title="Login"
      subtitle="UI demo only — not real authentication."
    >
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field
          name="email"
          validators={{
            onBlur: ({ value }) =>
              validateField(emailSchema, value),
          }}
        >
          {(field) => (
            <AuthField
              label="Email"
              error={
                field.state.meta.isTouched
                  ? field.state.meta.errors.join(", ")
                  : undefined
              }
            >
              <FieldInput
                type="email"
                placeholder="you@example.com"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                onBlur={field.handleBlur}
              />
            </AuthField>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onBlur: ({ value }) =>
              validateField(passwordSchema, value),
          }}
        >
          {(field) => (
            <AuthField
              label="Password"
              error={
                field.state.meta.isTouched
                  ? field.state.meta.errors.join(", ")
                  : undefined
              }
            >
              <FieldInput
                type="password"
                placeholder="Password"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                onBlur={field.handleBlur}
              />
            </AuthField>
          )}
        </form.Field>

        <Button
          type="submit"
          className="w-full"
        >
          Login (demo)
        </Button>

        <p className="text-sm text-zinc-600">
          New here?{" "}
          <Link
            to="/register"
            className="text-brand-600"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}

// REGISTER PAGE
export function RegisterPage() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },

    validators: {
      onSubmit: registerSchema,
    },

    onSubmit: async () => {
      toast.info(
        "Demo only: no account has been created"
      );

      await navigate({ to: "/otp" });
    },
  });

  return (
    <AuthShell
      title="Register"
      subtitle="This form validates input but does not create accounts."
    >
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field
          name="name"
          validators={{
            onBlur: ({ value }) =>
              validateField(nameSchema, value),
          }}
        >
          {(field) => (
            <AuthField
              label="Name"
              error={
                field.state.meta.isTouched
                  ? field.state.meta.errors.join(", ")
                  : undefined
              }
            >
              <FieldInput
                placeholder="Full name"
                maxLength={80}
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                onBlur={field.handleBlur}
              />
            </AuthField>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onBlur: ({ value }) =>
              validateField(emailSchema, value),
          }}
        >
          {(field) => (
            <AuthField
              label="Email"
              error={
                field.state.meta.isTouched
                  ? field.state.meta.errors.join(", ")
                  : undefined
              }
            >
              <FieldInput
                type="email"
                placeholder="you@example.com"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                onBlur={field.handleBlur}
              />
            </AuthField>
          )}
        </form.Field>

        <form.Field
          name="mobile"
          validators={{
            onBlur: ({ value }) =>
              validateField(mobileSchema, value),
          }}
        >
          {(field) => (
            <AuthField
              label="Mobile"
              error={
                field.state.meta.isTouched
                  ? field.state.meta.errors.join(", ")
                  : undefined
              }
            >
              <FieldInput
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="9876543210"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                onBlur={field.handleBlur}
              />
            </AuthField>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onBlur: ({ value }) =>
              validateField(passwordSchema, value),
          }}
        >
          {(field) => (
            <AuthField
              label="Password"
              error={
                field.state.meta.isTouched
                  ? field.state.meta.errors.join(", ")
                  : undefined
              }
            >
              <FieldInput
                type="password"
                placeholder="At least 8 characters"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                onBlur={field.handleBlur}
              />
            </AuthField>
          )}
        </form.Field>

        <Button
          type="submit"
          className="w-full"
        >
          Register (demo)
        </Button>

        <p className="text-sm text-zinc-600">
          Have an account?{" "}
          <Link
            to="/login"
            className="text-brand-600"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}

// OTP PAGE

export function OtpPage() {
  const form = useForm({
    defaultValues: {
      otp: "",
    },

    validators: {
      onSubmit: verifyOtpSchema,
    },

    onSubmit: async () => {
      toast.info(
        "Demo only: OTP verification is not connected"
      );
    },
  });

  return (
    <AuthShell
      title="Verify OTP"
      subtitle="Enter a 6-digit code (UI-only demo)."
    >
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field
          name="otp"
          validators={{
            onBlur: ({ value }) =>
              validateField(otpSchema, value),
          }}
        >
          {(field) => (
            <AuthField
              label="One-time password"
              error={
                field.state.meta.isTouched
                  ? field.state.meta.errors.join(", ")
                  : undefined
              }
            >
              <FieldInput
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                placeholder="000000"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                onBlur={field.handleBlur}
              />
            </AuthField>
          )}
        </form.Field>

        <Button
          type="submit"
          className="w-full"
        >
          Verify (demo)
        </Button>
      </form>
    </AuthShell>
  );
}