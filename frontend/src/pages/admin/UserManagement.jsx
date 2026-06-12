// Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// File imports
import {
  fetchAllUsers,
  updateUserStatus,
  deleteUser,
} from "../../redux/admin/adminThunk.js";
import "../../styles/Admin.css";

function UserManagement() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.admin);
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleToggleStatus = (user) => {
    const newStatus = user.status === "Active" ? "Inactive" : "Active";
    dispatch(updateUserStatus({ id: user._id, status: newStatus }));
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>User Management</h1>
        <p>View and manage all registered users</p>
      </div>

      {error && <p className="error-banner">{error}</p>}

      {loading ? (
        <p className="loading-text">Loading users...</p>
      ) : (
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty-cell">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={`badge role-${user.role?.toLowerCase()}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge status-${user.status?.toLowerCase()}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="actions-cell">
                      <button
                        className="action-btn toggle-btn"
                        onClick={() => handleToggleStatus(user)}
                        disabled={user._id === currentUser?.id}
                      >
                        {user.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => handleDelete(user._id)}
                        disabled={user._id === currentUser?.id}
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

export default UserManagement;
