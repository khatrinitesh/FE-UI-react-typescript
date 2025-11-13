import type { MainLayoutProps } from "../../interface";
import AdminHeader from "../adminHeader/AdminHeader";
import AdminSidebar from "../adminSidebar/AdminSidebar";

const AdminLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
