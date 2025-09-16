import type { ILayoutProps } from "../interface";

const AuthLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-gray-50">
      {children}
    </div>
  );
};

export default AuthLayout;
