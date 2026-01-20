const EmployeeTable = ({ employees }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Performance</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((emp, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2 px-4">{emp.name}</td>
              <td className="py-2 px-4">{emp.role}</td>
              <td className="py-2 px-4">{emp.performance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
