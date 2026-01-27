import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-64 bg-white shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Enterprise</h2>

      <nav className="space-y-2">
        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>

        <Link to="/tasks" className={linkClass("/tasks")}>
          Tasks
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
