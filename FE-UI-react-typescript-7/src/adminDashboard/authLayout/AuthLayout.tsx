import type { I_LayoutProps } from "../../interface";

const AuthLayout = ({ children }: I_LayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 loginPage">
      {children}
    </div>
  );
};

export default AuthLayout;
