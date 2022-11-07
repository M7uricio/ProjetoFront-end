import { Routes, Route, Navigate } from "react-router";
import { RegisterPage } from "../pages/register";
import { Login } from "../pages/Login";
import LandingPage from "../pages/landingPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { UserDashBoard } from "../pages/UserDashBoard";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const RoutesMain = () => {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      <Route
        path="*"
        element={user === null ? <Navigate to="/landing" /> : <UserDashBoard />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<UserDashBoard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
