// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// File imports
import { logout } from "../redux/auth/authSlice";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">Task Manager</div>

      <div className="nav-right">
        <div className="user-info">
          <span className="user-name">{user?.name}</span>
          <span className="user-role">{user?.role}</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;