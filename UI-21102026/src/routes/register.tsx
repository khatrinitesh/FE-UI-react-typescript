import { AuthLayout } from "../components/layout/AuthLayout";
import { RegisterForm } from "../features/auth/RegisterForm";

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create account"
      description="Create your account to get started."
    >
      <RegisterForm />
    </AuthLayout>
  );
};