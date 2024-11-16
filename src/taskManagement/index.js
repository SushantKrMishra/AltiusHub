import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState(""); //for search functionality
  const [task, setTask] = useState({ id: "", title: "", desc: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const generateId = () => Date.now().toString();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.desc) {
      alert("Please fill out all the fields");
      return;
    }

    if (isEditing) {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? task : t))
      );
      setIsEditing(false);
    } else {
      setTasks((prevTasks) => [...prevTasks, { ...task, id: generateId() }]);
    }
    setTask({ id: "", title: "", desc: "" });
  };

  const handleEdit = (id) => {
    const foundTask = tasks.find((t) => t.id === id);
    setTask(foundTask);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
    }
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );
  const navigate = useNavigate();

  return (
    <div>
      <h1>Task Manager</h1>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        See user Profile
      </button>
      <button onClick={() => navigate("/upload")}>Image Uploader</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={task.desc}
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add Task"}</button>
      </form>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ margin: "20px 0", width: "100%", padding: "10px" }}
      />
      {/* task list */}
      <ul>
        {filteredTasks.map((t) => (
          <li
            key={t.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <button
              onClick={() => {
                handleEdit(t.id);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
