import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

type EmployeeStatus = "Active" | "Pending" | "Inactive";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: EmployeeStatus;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Anil Sharma",
    email: "anil@example.com",
    department: "Technology",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Imran Khan",
    email: "imran@example.com",
    department: "Technology",
    role: "Backend Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Krishna Patel",
    email: "krishna@example.com",
    department: "Design",
    role: "UI Designer",
    status: "Pending",
  },
  {
    id: 4,
    name: "Govind Singh",
    email: "govind@example.com",
    department: "Management",
    role: "Project Manager",
    status: "Active",
  },
  {
    id: 5,
    name: "Sunil Mehta",
    email: "sunil@example.com",
    department: "Technology",
    role: "Quality Analyst",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Vipul Shah",
    email: "vipul@example.com",
    department: "Marketing",
    role: "Content Strategist",
    status: "Pending",
  },
];

const statusStyles: Record<EmployeeStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Inactive: "bg-slate-200 text-slate-600",
};

export default function FilterTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredEmployees = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesSearch =
        !query ||
        [employee.name, employee.email, employee.role].some((value) =>
          value.toLowerCase().includes(query),
        );

      const matchesDepartment =
        department === "All" || employee.department === department;

      const matchesStatus = status === "All" || employee.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [searchQuery, department, status]);

  const hasActiveFilters =
    searchQuery !== "" || department !== "All" || status !== "All";

  const clearFilters = () => {
    setSearchQuery("");
    setDepartment("All");
    setStatus("All");
  };

  return (
    <section className="mx-auto w-full max-w-7xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Employee Directory
        </h2>

        <p className="mt-1 text-sm text-[#525659]">
          Search and filter employee records.
        </p>
      </header>

      <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_200px_180px_auto]">
        <label className="relative">
          <span className="sr-only">Search employees</span>

          <Search
            size={19}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search name, email or role..."
            className="h-12 w-full rounded-lg border border-slate-300 pr-4 pl-11 text-sm outline-none transition focus:border-[#009eff] focus:ring-4 focus:ring-[#009eff]/10"
          />
        </label>

        <label>
          <span className="sr-only">Filter by department</span>

          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#009eff] focus:ring-4 focus:ring-[#009eff]/10"
          >
            <option value="All">All departments</option>
            <option value="Technology">Technology</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
            <option value="Marketing">Marketing</option>
          </select>
        </label>

        <label>
          <span className="sr-only">Filter by status</span>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#009eff] focus:ring-4 focus:ring-[#009eff]/10"
          >
            <option value="All">All statuses</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
          >
            <X size={17} />
            Clear
          </button>
        )}
      </div>

      <p aria-live="polite" className="mb-4 text-sm text-slate-500">
        Showing {filteredEmployees.length} of {employees.length} employees
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-200 border-collapse text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-5 py-4 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                Employee
              </th>

              <th className="px-5 py-4 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                Department
              </th>

              <th className="px-5 py-4 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                Role
              </th>

              <th className="px-5 py-4 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="transition hover:bg-[#009eff]/5"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium text-slate-900">
                      {employee.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {employee.email}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-700">
                    {employee.department}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-700">
                    {employee.role}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[employee.status]
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-5 py-12 text-center text-sm text-slate-500"
                >
                  No matching employee records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
