import { useState } from "react";
import { useTodoStore } from "../../store/useTodoStore";
import { TODO_STATUS } from "./todoConstants";

const ToDolist = () => {
  const [task, setTask] = useState("");
  const { todos, addTodo, toggleTodo, removeTodo, clearCompleted } =
    useTodoStore();

  const handleAdd = () => {
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  };
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
      <h2>📝 To-Do List</h2>

      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor:
                todo.status === TODO_STATUS.COMPLETED ? "#d1ffd1" : "#fff",
              padding: "8px",
              marginBottom: "6px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration:
                  todo.status === TODO_STATUS.COMPLETED
                    ? "line-through"
                    : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button
          onClick={clearCompleted}
          style={{
            marginTop: "1rem",
            background: "#ff5555",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
          }}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default ToDolist;
