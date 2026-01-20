const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-gray-800">Enterprise Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
