const Sidebar = () => {
  const menu = ["Dashboard", "Employees", "Tasks", "Reports"];
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      {menu.map((item, idx) => (
        <a
          key={idx}
          href="#"
          className="py-2 px-3 rounded hover:bg-gray-700 mb-2"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
