import { useState, useEffect } from "react";

const Tasks = () => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState("all");

    // ✅ editing state must be inside component
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");

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
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        // if you delete the task being edited, exit edit mode
        if (editingId === id) {
            setEditingId(null);
            setEditTitle("");
        }
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // ✅ move these inside so they can access state
    const startEdit = (task) => {
        setEditingId(task.id);
        setEditTitle(task.title);
    };

    const saveEdit = () => {
        if (!editTitle.trim()) return;

        setTasks(
            tasks.map((task) =>
                task.id === editingId ? { ...task, title: editTitle } : task
            )
        );

        setEditingId(null);
        setEditTitle("");
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });
    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };


    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;

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
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    className="border px-3 py-2 rounded w-64"
                />
                <button
                    onClick={addTask}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow rounded p-4">
                    <p className="text-gray-500 text-sm">Total Tasks</p>
                    <h2 className="text-2xl font-bold">{tasks.length}</h2>
                </div>

                <div className="bg-green-100 rounded p-4">
                    <p className="text-green-700 text-sm">Completed</p>
                    <h2 className="text-2xl font-bold">
                        {tasks.filter(t => t.completed).length}
                    </h2>
                </div>

                <div className="bg-yellow-100 rounded p-4">
                    <p className="text-yellow-700 text-sm">Pending</p>
                    <h2 className="text-2xl font-bold">
                        {tasks.filter(t => !t.completed).length}
                    </h2>
                </div>
            </div>


            {/* Filters */}
            <div className="flex gap-3 mb-6">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("completed")}
                    className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    Completed
                </button>

                <button
                    onClick={() => setFilter("pending")}
                    className={`px-3 py-1 rounded ${filter === "pending" ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    Pending
                </button>
                <button
                    disabled={!tasks.some(t => t.completed)}
                    onClick={clearCompleted}
                    className={`text-sm mb-4 ${tasks.some(t => t.completed)
                            ? "text-red-600 hover:underline"
                            : "text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Clear Completed Tasks
                </button>

            </div>

            {/* Stats */}
            <div className="flex gap-6 mb-6 text-sm font-medium">
                <span>Total: {total}</span>
                <span className="text-green-600">Completed: {completed}</span>
                <span className="text-orange-600">Pending: {pending}</span>
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
                            {editingId === task.id ? (
                                <input
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                                    className="border px-2 py-1 rounded"
                                />
                            ) : (
                                <span
                                    className={task.completed ? "line-through text-gray-400" : ""}
                                >
                                    {task.title}
                                </span>
                            )}

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

                                {editingId === task.id ? (
                                    <button
                                        onClick={saveEdit}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        disabled={task.completed}
                                        onClick={() => startEdit(task)}
                                        className={`text-sm hover:underline ${task.completed
                                            ? "text-gray-400 cursor-not-allowed"
                                            : "text-blue-600"
                                            }`}
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Tasks;
