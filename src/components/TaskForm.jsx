import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "low",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) return;
    onAdd(form);
    setForm({ title: "", description: "", status: "pending", priority: "low" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>pending</option>
        <option>in-progress</option>
        <option>done</option>
      </select>

      <select
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option>low</option>
        <option>medium</option>
        <option>high</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}
