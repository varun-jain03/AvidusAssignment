// Dependencies
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute({ children }) {
  const { user } = useSelector(
    (state) => state.auth
  );

  if (user?.role !== "Admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default AdminRoute;