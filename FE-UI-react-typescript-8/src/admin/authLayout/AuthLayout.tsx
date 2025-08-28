import type { MainLayoutProps } from "../../interface";

const AuthLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 loginPage">
      {children}
    </div>
  );
};

export default AuthLayout;
