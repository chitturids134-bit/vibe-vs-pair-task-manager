import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    if (!title) return;
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task Manager</h1>

      <input
        placeholder="Enter task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = "";
          }
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {filteredTasks.map(task => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;