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
    </div>
  );
};

export default KpiCard;
