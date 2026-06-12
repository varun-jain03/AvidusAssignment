// dependencies
import { useState } from "react";

// file imports
import "../styles/Tasks.css";

function TaskForm({ onSubmit, initialData = null, buttonText, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    status: initialData?.status || "Pending",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    if (!initialData) {
      setFormData({
        title: "",
        description: "",
        status: "Pending",
      });
    }
  };

  return (
    <div className="task-form-container">
      <h2>
        {initialData ? "Update Task" : "Create New Task"}
      </h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Pending">
            Pending
          </option>

          <option value="completed">
            Completed
          </option>
        </select>

        <div className="form-actions">
          <button type="submit">
            {buttonText || (initialData ? "Update Task" : "Create Task")}
          </button>
          {onCancel && (
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;