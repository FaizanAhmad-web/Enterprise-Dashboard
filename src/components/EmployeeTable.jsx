const EmployeeTable = ({ employees }) => {
  return (
    <div className="bg-white rounded-lg shadow mt-6 overflow-x-auto">
      <h2 className="text-lg font-semibold p-4 border-b">
        Employee Performance
      </h2>

      <table className="min-w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Performance</th>
          </tr>
        </thead>

        <tbody>
          {employees?.map((emp, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">{emp.name}</td>
              <td className="px-4 py-3">{emp.role}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    emp.performance >= 85
                      ? "bg-green-100 text-green-700"
                      : emp.performance >= 70
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {emp.performance}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
