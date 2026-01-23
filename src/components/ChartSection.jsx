import PerformanceChart from "../components/PerformanceChart";

const ChartSection = () => {
  return (
    <div className="bg-white shadow p-4 rounded mt-6">
      <h2 className="text-lg font-bold mb-4">Performance Trends</h2>
      <PerformanceChart />
    </div>
  );
};

export default ChartSection;
