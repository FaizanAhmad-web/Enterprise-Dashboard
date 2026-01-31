import { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import { employees as employeeData } from "../data/dashboardData";

const Employees = () => {
  const [search, setSearch] = useState("");

  const filteredEmployees = employeeData.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded mb-4 w-64"
      />

      {/* Table */}
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default Employees;
