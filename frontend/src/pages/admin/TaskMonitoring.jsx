// Dependencies
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// File imports
import {
  fetchAllTasks,
  adminDeleteTask,
  adminUpdateTask,
} from "../../redux/admin/adminThunk.js";
import TaskForm from "../../components/TaskForm.jsx";
import "../../styles/Admin.css";
import "../../styles/Tasks.css";

function TaskMonitoring() {
  const dispatch = useDispatch();
  const { allTasks, loading, error } = useSelector((state) => state.admin);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    if (window.confirm("Delete this task?")) {
      dispatch(adminDeleteTask(taskId));
    }
  };

  const handleUpdate = (taskData) => {
    dispatch(adminUpdateTask({ id: editingTask._id, taskData }));
    setEditingTask(null);
  };

  const getCreatorName = (task) => {
    if (task.createdBy?.name) return task.createdBy.name;
    if (typeof task.createdBy === "string") return "Unknown";
    return task.createdBy?.email || "Unknown";
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Task Monitoring</h1>
        <p>Monitor all tasks across the platform</p>
      </div>

      {error && <p className="error-banner">{error}</p>}

      {editingTask && (
        <TaskForm
          initialData={editingTask}
          onSubmit={handleUpdate}
          onCancel={() => setEditingTask(null)}
        />
      )}

      {loading ? (
        <p className="loading-text">Loading tasks...</p>
      ) : (
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allTasks.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty-cell">
                    No tasks found
                  </td>
                </tr>
              ) : (
                allTasks.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td className="desc-cell">{task.description || "—"}</td>
                    <td>
                      <span
                        className={
                          task.status === "completed" ? "completed" : "pending"
                        }
                      >
                        {task.status}
                      </span>
                    </td>
                    <td>{getCreatorName(task)}</td>
                    <td className="actions-cell">
                      <button
                        className="action-btn edit-btn"
                        onClick={() => setEditingTask(task)}
                      >
                        Edit
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => handleDelete(task._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TaskMonitoring;
