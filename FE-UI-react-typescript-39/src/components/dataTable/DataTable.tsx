import { useEffect } from "react";
import { useTableStore } from "../../store/useTableStore";
import { TABLE_DATA, TABLE_HEADERS } from "../../constants/constants";
import { motion } from "framer-motion";

const DataTable = () => {
  const { users, setUsers } = useTableStore();

  useEffect(() => {
    setUsers(TABLE_DATA);
  }, [setUsers]);
  return (
    <div className="overflow-x-auto w-150">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header} className="p-3 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <motion.tr
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.role}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
