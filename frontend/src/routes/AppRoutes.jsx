// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// File Imports
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
