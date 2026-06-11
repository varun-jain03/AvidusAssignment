import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
