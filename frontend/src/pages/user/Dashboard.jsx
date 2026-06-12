// Dependencies
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// File imports
import Navbar from "../../components/Navbar.jsx";
import TaskForm from "../../components/TaskForm.jsx";
import TaskCard from "../../components/TaskCard.jsx";
import {
  getMyTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../../redux/tasks/taskThunk.js";
import "../../styles/Tasks.css";

function Dashboard() {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    dispatch(getMyTasks());
  }, [dispatch]);

  const handleCreateTask = (taskData) => {
    dispatch(createTask(taskData));
  };

  const handleUpdateTask = (taskData) => {
    dispatch(updateTask({ id: editingTask._id, taskData }));
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Delete this task?")) {
      dispatch(deleteTask(taskId));
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1>My Tasks</h1>

        {error && <p className="error-banner">{error}</p>}

        {editingTask ? (
          <TaskForm
            initialData={editingTask}
            onSubmit={handleUpdateTask}
            onCancel={() => setEditingTask(null)}
          />
        ) : (
          <TaskForm onSubmit={handleCreateTask} />
        )}

        {loading ? (
          <p className="loading-text">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="empty-text">
            No tasks yet. Create your first task above.
          </p>
        ) : (
          <div className="task-grid">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={handleDeleteTask}
                onEdit={setEditingTask}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
