import { motion } from "framer-motion";
import { useZebraStripingTableStore } from "../../store/useZebraStripingTableStore";
import type { ZebraStripeTableRow } from "../../interface/auth";
import { HOVER_BG, ROW_EVEN_BG, ROW_ODD_BG } from "../../constants/constants";

interface ZebraTableProps {
  data: ZebraStripeTableRow[];
}
const columns: (keyof ZebraStripeTableRow)[] = [
  "name", //1
  "email", //2
  "role", //3
  "age", //4
  "department", //5
  "location", //6
  "phone", //7
  "status", //8
  "startDate", //9
];
const ZebraStripingTable = ({ data }: ZebraTableProps) => {
  const { activeRowId, setActiveRowId } = useZebraStripingTableStore();
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 text-left">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-3">
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, index) => {
              const bgClass = index % 2 === 0 ? ROW_EVEN_BG : ROW_ODD_BG;

              return (
                <motion.tr
                  key={row.id}
                  onMouseEnter={() => setActiveRowId(row.id)}
                  onMouseLeave={() => setActiveRowId(null)}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${bgClass} ${HOVER_BG} ${
                    activeRowId === row.id ? "bg-indigo-100" : ""
                  } transition-colors`}
                >
                  {columns.map((col) => (
                    <td key={col} className="px-4 py-3">
                      {row[col] ?? "-"}
                    </td>
                  ))}
                </motion.tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ZebraStripingTable;
