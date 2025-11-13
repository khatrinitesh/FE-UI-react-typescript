import { useTableStore } from "../../store/tableStore";

const ZebraStripingTable = () => {
  const { rows, toggleActive } = useTableStore();
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Age</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-green-100 transition`}
            >
              <td className="py-2 px-4">{row.id}</td>
              <td className="py-2 px-4 font-medium">{row.name}</td>
              <td className="py-2 px-4">{row.age}</td>
              <td className="py-2 px-4">{row.role}</td>
              <td
                className={`py-2 px-4 font-semibold ${
                  row.active ? "text-green-700" : "text-red-600"
                }`}
              >
                {row.active ? "Active" : "Inactive"}
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => toggleActive(row.id)}
                  className={`px-3 py-1 text-sm rounded ${
                    row.active
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  {row.active ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ZebraStripingTable;
