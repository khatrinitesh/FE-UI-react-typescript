import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Anil Sharma",
    role: "Frontend Developer",
    department: "Technology",
  },
  {
    id: 2,
    name: "Imran Khan",
    role: "Backend Developer",
    department: "Technology",
  },
  {
    id: 3,
    name: "Krishna Patel",
    role: "UI Designer",
    department: "Design",
  },
  {
    id: 4,
    name: "Govind Singh",
    role: "Project Manager",
    department: "Management",
  },
  {
    id: 5,
    name: "Sunil Mehta",
    role: "Quality Analyst",
    department: "Technology",
  },
  {
    id: 6,
    name: "Vipul Shah",
    role: "Content Strategist",
    department: "Marketing",
  },
];

export default function FilterList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return employees;
    }

    return employees.filter((employee) =>
      [employee.name, employee.role, employee.department].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [searchQuery]);

  return (
    <section className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Team Members</h2>

        <p className="mt-1 text-sm text-[#525659]">
          Search by name, role, or department.
        </p>
      </header>

      <label htmlFor="employee-search" className="sr-only">
        Search employees
      </label>

      <div className="relative">
        <Search
          size={20}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
        />

        <input
          id="employee-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search employees..."
          className="h-12 w-full rounded-xl border border-slate-300 pr-12 pl-11 text-sm outline-none transition focus:border-[#009eff] focus:ring-4 focus:ring-[#009eff]/10"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-slate-500">
        {filteredEmployees.length}{" "}
        {filteredEmployees.length === 1 ? "result" : "results"} found
      </p>

      {filteredEmployees.length > 0 ? (
        <ul className="mt-4 divide-y divide-slate-200">
          {filteredEmployees.map((employee) => (
            <li key={employee.id} className="flex items-center gap-4 py-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#009eff]/10 font-semibold text-[#009eff]">
                {employee.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-slate-900">
                  {employee.name}
                </h3>

                <p className="truncate text-sm text-[#525659]">
                  {employee.role}
                </p>
              </div>

              <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:inline-flex">
                {employee.department}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <p className="font-medium text-slate-700">No employees found</p>

          <p className="mt-1 text-sm text-slate-500">
            Try searching with another name, role, or department.
          </p>
        </div>
      )}
    </section>
  );
}
