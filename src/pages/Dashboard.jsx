import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import KpiCard from "../components/KpiCard";
import EmployeeTable from "../components/EmployeeTable";
import ChartSection from "../components/ChartSection";

const Dashboard = () => {
  const employees = [
    { name: "John Doe", role: "Frontend Developer", performance: 90 },
    { name: "Jane Smith", role: "UI Designer", performance: 85 },
    { name: "Rahul Verma", role: "Backend Developer", performance: 78 },
    { name: "Ayesha Khan", role: "QA Engineer", performance: 88 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          {/* KPI Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <KpiCard title="Total Employees" value="120" />
            <KpiCard title="Active Projects" value="8" />
            <KpiCard title="Tasks Completed" value="342" />
            <KpiCard title="Avg Performance" value="86%" />
          </div>

          {/* Chart */}
          <ChartSection />

          {/* Employee Table */}
          <EmployeeTable employees={employees} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
