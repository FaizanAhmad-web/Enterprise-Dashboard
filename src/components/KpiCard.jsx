const KpiCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition w-64">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            {value}
          </h2>
        </div>
        {icon && (
          <div className="text-blue-600 text-3xl">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default KpiCard;
