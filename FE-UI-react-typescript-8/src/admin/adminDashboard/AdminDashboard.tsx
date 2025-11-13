const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-headTitle font-bold text-color1 mb-6">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-subTitle font-semibold text-color1">Users</h3>
          <p className="text-description text-gray-600">
            1,024 Registered Users
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-subTitle font-semibold text-color1">Orders</h3>
          <p className="text-description text-gray-600">563 Completed Orders</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-subTitle font-semibold text-color1">Revenue</h3>
          <p className="text-description text-gray-600">$12,430 This Month</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
