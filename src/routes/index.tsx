import { Routes, Route, Navigate } from "react-router";
import { RegisterPage } from "../pages/register/registeruser";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/landing" />} />
      <Route path="/login" element={<h1>login</h1>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/landing" element={<h1>landing Page</h1>} />

      <Route path="/dashboard" element={<h1>dash</h1>}></Route>
    </Routes>
  );
};

export default RoutesMain;
