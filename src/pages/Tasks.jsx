import { useState, useEffect } from "react";



const Tasks = () => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const addTask = () => {
        if (!title.trim()) return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title,
                completed: false,
            },
        ]);

        setTitle("");
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true; // all
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

            {/* Add Task */}
            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border px-3 py-2 rounded w-64"
                />
                <button
                    onClick={addTask}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add
                </button>
            </div>
            <div className="flex gap-3 mb-6">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1 rounded ${filter === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("completed")}
                    className={`px-3 py-1 rounded ${filter === "completed"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    Completed
                </button>

                <button
                    onClick={() => setFilter("pending")}
                    className={`px-3 py-1 rounded ${filter === "pending"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    Pending
                </button>
            </div>
            <div className="flex gap-6 mb-6 text-sm font-medium">
                <span>Total: {tasks.length}</span>
                <span className="text-green-600">
                    Completed: {tasks.filter(t => t.completed).length}
                </span>
                <span className="text-orange-600">
                    Pending: {tasks.filter(t => !t.completed).length}
                </span>
            </div>

            {/* Task Stats */}
            <div className="flex gap-4 mb-4">
                <div className="bg-white px-4 py-2 rounded shadow text-sm">
                    Total: <span className="font-semibold">{tasks.length}</span>
                </div>

                <div className="bg-green-100 px-4 py-2 rounded text-sm text-green-700">
                    Completed:{" "}
                    <span className="font-semibold">
                        {tasks.filter(t => t.completed).length}
                    </span>
                </div>

                <div className="bg-yellow-100 px-4 py-2 rounded text-sm text-yellow-700">
                    Pending:{" "}
                    <span className="font-semibold">
                        {tasks.filter(t => !t.completed).length}
                    </span>
                </div>
            </div>



            {/* Task List */}
            {filteredTasks.length === 0 ? (
                <p className="text-gray-400 italic">No tasks found</p>
            ) : (
                <ul className="space-y-2">
                    {filteredTasks.map((task) => (
                        <li
                            key={task.id}
                            className="bg-white p-3 rounded shadow flex justify-between items-center hover:bg-gray-50"
                        >
                            <span
                                className={`${task.completed ? "line-through text-gray-400" : ""
                                    }`}
                            >
                                {task.title}
                            </span>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => toggleTask(task.id)}
                                    className="text-sm text-green-600 hover:underline"
                                >
                                    {task.completed ? "Undo" : "Done"}
                                </button>

                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="text-sm text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Tasks;
