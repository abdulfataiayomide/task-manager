import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getTasks();
        setTasks(data);
      } catch {
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleAdd = async (task) => {
    if (!task.title) return;

    setError("");
    try {
      const newTask = await createTask(task);
      setTasks((prev) => [...prev, newTask]);
    } catch {
      setError("Failed to create task");
    }
  };

  const handleUpdate = async (id, updates) => {
    setError("");
    try {
      await updateTask(id, updates);
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, ...updates } : t))
      );
    } catch {
      setError("Failed to update task");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete task?")) return;

    setError("");
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch {
      setError("Failed to delete task");
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2 className="title">Task Manager</h2>

        <TaskForm onAdd={handleAdd} />

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        <TaskList
          tasks={tasks}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
