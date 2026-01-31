import { useNavigate } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear any stored session data
    localStorage.clear();

    // redirect to login page
    navigate("/login");
  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Enterprise Dashboard</h1>

      <div className="flex gap-3 items-center">
        {/* Search (only works where props are passed) */}
        {setSearch && (
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded w-64"
          />
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
