import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MinimalLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      {/* Main page content */}
      <main className="w-full max-w-4xl px-6 py-12">
        <Outlet />
      </main>

      {/* Toast notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default MinimalLayout;
