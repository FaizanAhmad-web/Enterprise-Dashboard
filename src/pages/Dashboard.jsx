import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
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
      </div>
    </div>
  );
};

export default Dashboard;
