// Dependencies
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// File imports
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Dashboard from "../pages/user/Dashboard.jsx";
import AdminLayout from "../components/AdminLayout.jsx";
import AdminDashboard from "../pages/admin/Dashboard.jsx";
import UserManagement from "../pages/admin/UserManagement.jsx";
import TaskMonitoring from "../pages/admin/TaskMonitoring.jsx";
import ActivityLogs from "../pages/admin/ActivityLogs.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import AdminRoute from "../components/AdminRoute.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="tasks" element={<TaskMonitoring />} />
          <Route path="activity" element={<ActivityLogs />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
