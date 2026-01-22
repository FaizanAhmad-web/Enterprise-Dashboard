<<<<<<< HEAD
const KpiCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2 text-gray-800">{value}</h2>
=======
const KpiCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow p-4 rounded w-64">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <h2 className="text-2xl font-bold">{value}</h2>
        </div>
        <div className="text-blue-600 text-3xl">{icon}</div>
      </div>
>>>>>>> 5c631a51e63c440095461a0b4f60a6e5c164d193
    </div>
  );
};

export default KpiCard;
