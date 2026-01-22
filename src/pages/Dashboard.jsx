import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
<<<<<<< HEAD
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
=======
import KpiCard from "../components/kpicard";
import EmployeeTable from "../components/employeeTable";
import ChartSection from "../components/chartSection";

const Dashboard = () => {
  const employees = [
    { name: "John Doe", role: "Developer", performance: "90%" },
    { name: "Jane Smith", role: "Designer", performance: "85%" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <div className="flex space-x-4">
            <KpiCard title="Total Employees" value="120" icon="👥" />
            <KpiCard title="Active Tasks" value="34" icon="✅" />
            <KpiCard title="Completed Tasks" value="86" icon="🏆" />
          </div>
          <EmployeeTable employees={employees} />
          <ChartSection />
        </div>
>>>>>>> 5c631a51e63c440095461a0b4f60a6e5c164d193
      </div>
    </div>
  );
};

export default Dashboard;
