export default function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <strong>{task.title}</strong>

          <select
            value={task.status}
            onChange={(e) =>
              onUpdate(task._id, { status: e.target.value })
            }
          >
            <option>pending</option>
            <option>in-progress</option>
            <option>done</option>
          </select>

          <select
            value={task.priority}
            onChange={(e) =>
              onUpdate(task._id, { priority: e.target.value })
            }
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>

          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
