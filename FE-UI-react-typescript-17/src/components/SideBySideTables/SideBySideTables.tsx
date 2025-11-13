import React from "react";
import { TABLES_DATA } from "./tableData";
import type { TableData } from "../../interface";

const SideBySideTables: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TABLES_DATA.map((table: TableData, index: number) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden border border-gray-200"
          >
            <h3 className="bg-green-700 text-white text-center py-2 font-semibold">
              {table.title}
            </h3>
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border-b">#</th>
                  <th className="p-2 border-b">Name</th>
                  <th className="p-2 border-b">Value</th>
                  {table.rows.some((r) => r.status) && (
                    <th className="p-2 border-b">Status</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="p-2 border-b">{row.id}</td>
                    <td className="p-2 border-b">{row.name}</td>
                    <td className="p-2 border-b">{row.value}</td>
                    {table.rows.some((r) => r.status) && (
                      <td className="p-2 border-b">{row.status || "-"}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBySideTables;
