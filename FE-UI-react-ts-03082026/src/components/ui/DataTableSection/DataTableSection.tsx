import { createColumnHelper } from "@tanstack/react-table";
import DataTable from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
];

const data: User[] = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
  },
];

export default function DataTableSection() {
  return (
    <div className="container mx-auto p-8">
      <DataTable data={data} columns={columns} />
    </div>
  );
}
