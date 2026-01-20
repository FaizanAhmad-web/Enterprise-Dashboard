const KpiCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2 text-gray-800">{value}</h2>
    </div>
  );
};

export default KpiCard;
