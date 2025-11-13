import { useEffect } from "react";
import type { UserTableFormatProps } from "../../interface";
import { useTableStore } from "../../logic-store-state-management/useUserTableFormatStore/useUserTableFormatStore";
import { filterAndSortData } from "../../utils/utils";
import "./table-style.css";

const TableFormatComponent = ({
  initialData,
}: {
  initialData: UserTableFormatProps[];
}) => {
  const {
    data,
    setData,
    searchQuery,
    setSearchQuery,
    sortBy,
    sortOrder,
    setSort,
    currentPage,
    setCurrentPage,
    rowsPerPage,
  } = useTableStore();

  useEffect(() => {
    setData(initialData);
  }, [initialData, setData]);

  const filteredSortedData = filterAndSortData(
    data,
    searchQuery,
    sortBy,
    sortOrder
  );

  const paginatedData = filteredSortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredSortedData.length / rowsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th onClick={() => setSort("name")}>
              Name {sortBy === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th onClick={() => setSort("email")}>
              Email{" "}
              {sortBy === "email" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th onClick={() => setSort("age")}>
              Age {sortBy === "age" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableFormatComponent;
