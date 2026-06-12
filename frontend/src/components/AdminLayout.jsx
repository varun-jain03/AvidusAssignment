// Dependencies
import { NavLink, Outlet } from "react-router-dom";

// File imports
import Navbar from "./Navbar.jsx";
import "../styles/Admin.css";

const adminLinks = [
  { to: "/admin", label: "Analytics", end: true },
  { to: "/admin/users", label: "User Management" },
  { to: "/admin/tasks", label: "Task Monitoring" },
  { to: "/admin/activity", label: "Activity Logs" },
];

function AdminLayout() {
  return (
    <>
      <Navbar />
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <h2>Admin Panel</h2>
          <nav className="admin-nav">
            {adminLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isActive ? "admin-nav-link active" : "admin-nav-link"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminLayout;
