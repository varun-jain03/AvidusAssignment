// Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// File imports
import { fetchActivities } from "../../redux/admin/adminThunk.js";
import "../../styles/Admin.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleString();
}

function ActivityLogs() {
  const dispatch = useDispatch();
  const { activities, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Activity Logs</h1>
        <p>Recent user actions across the platform</p>
      </div>

      {error && <p className="error-banner">{error}</p>}

      {loading ? (
        <p className="loading-text">Loading activity logs...</p>
      ) : (
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Details</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty-cell">
                    No activity logs yet
                  </td>
                </tr>
              ) : (
                activities.map((activity) => (
                  <tr key={activity._id}>
                    <td>
                      {activity.user?.name || "Unknown"}
                      {activity.user?.email && (
                        <span className="sub-text">{activity.user.email}</span>
                      )}
                    </td>
                    <td>
                      <span className="badge action-badge">
                        {activity.action}
                      </span>
                    </td>
                    <td className="desc-cell">{activity.details || "—"}</td>
                    <td>{formatDate(activity.createdAt)}</td>
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

export default ActivityLogs;
