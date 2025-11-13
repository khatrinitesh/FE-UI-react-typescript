import React from "react";

const AdminHeader = () => {
  return (
    <header className="bg-color1 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-headTitle font-bold">Admin Dashboard</h1>
      <div className="text-sm">
        <span>Welcome, Admin</span>
        {/* Add logout or profile dropdown here if needed */}
      </div>
    </header>
  );
};

export default AdminHeader;
