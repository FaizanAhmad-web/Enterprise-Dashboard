import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import KpiCard from "../components/KpiCard";
import EmployeeTable from "../components/EmployeeTable";
import ChartSection from "../components/ChartSection";
import { kpiData, employees } from "../data/dashboardData";


const Dashboard = () => {
const [search, setSearch] = useState("");
const filteredEmployees = employees.filter((emp) =>
  emp.name.toLowerCase().includes(search.toLowerCase()) ||
  emp.role.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar search={search} setSearch={setSearch} />


        <main className="flex-1 overflow-y-auto p-6 w-full min-w-0">
          {/* KPI Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {kpiData.map((kpi, index) => (
              <KpiCard
                key={index}
                title={kpi.title}
                value={kpi.value}
                icon={kpi.icon}
              />
              
            ))}
          </div>


          {/* Chart */}
          <ChartSection />

          {/* Employee Table */}
          <EmployeeTable employees={filteredEmployees} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
