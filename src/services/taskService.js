import { API_URL } from "../config";

// Change this to false when backend is ready
const USE_MOCK = true;

let mockTasks = [
  {
    _id: "1",
    title: "Sample task",
    status: "pending",
    priority: "medium",
  },
];

const delay = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 700));

export const getTasks = async () => {
  if (USE_MOCK) return delay(mockTasks);

  const res = await fetch(`${API_URL}/api/tasks`);
  return res.json();
};

export const createTask = async (task) => {
  if (USE_MOCK) {
    const newTask = { ...task, _id: Date.now().toString() };
    mockTasks.push(newTask);
    return delay(newTask);
  }

  const res = await fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const updateTask = async (id, updates) => {
  if (USE_MOCK) {
    mockTasks = mockTasks.map((t) =>
      t._id === id ? { ...t, ...updates } : t
    );
    return delay(true);
  }

  await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
};

export const deleteTask = async (id) => {
  if (USE_MOCK) {
    mockTasks = mockTasks.filter((t) => t._id !== id);
    return delay(true);
  }

  await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "DELETE",
  });
};
