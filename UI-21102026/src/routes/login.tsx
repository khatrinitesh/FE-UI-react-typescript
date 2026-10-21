import { AuthLayout } from "../components/layout/AuthLayout";
import { LoginForm } from "../features/auth/LoginForm";


export const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome back"
      description="Login to continue."
    >
      <LoginForm />
    </AuthLayout>
  );
};