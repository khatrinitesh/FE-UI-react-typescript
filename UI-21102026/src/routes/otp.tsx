import { AuthLayout } from "../components/layout/AuthLayout";
import { OtpForm } from "../features/auth/OtpForm";

export const OtpPage = () => {
  return (
    <AuthLayout
      title="Verify OTP"
      description="Enter the 6-digit OTP sent to your mobile."
    >
      <OtpForm />
    </AuthLayout>
  );
};