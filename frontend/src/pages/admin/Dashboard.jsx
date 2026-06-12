// Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// File imports
import { fetchAnalytics } from "../../redux/admin/adminThunk.js";
import "../../styles/Admin.css";

function AnalyticsCards({ analytics }) {
  const cards = [
    { label: "Total Users", value: analytics?.totalUsers ?? 0, color: "blue" },
    { label: "Total Tasks", value: analytics?.totalTasks ?? 0, color: "purple" },
    { label: "Completed Tasks", value: analytics?.completedTasks ?? 0, color: "green" },
    { label: "Pending Tasks", value: analytics?.pendingTasks ?? 0, color: "orange" },
  ];

  return (
    <div className="analytics-grid">
      {cards.map((card) => (
        <div key={card.label} className={`analytics-card ${card.color}`}>
          <span className="analytics-label">{card.label}</span>
          <span className="analytics-value">{card.value}</span>
        </div>
      ))}
    </div>
  );
}

function AdminDashboard() {
  const dispatch = useDispatch();
  const { analytics, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Analytics Overview</h1>
        <p>Key metrics across the platform</p>
      </div>

      {error && <p className="error-banner">{error}</p>}

      {loading ? (
        <p className="loading-text">Loading analytics...</p>
      ) : (
        <AnalyticsCards analytics={analytics} />
      )}
    </div>
  );
}

export default AdminDashboard;
