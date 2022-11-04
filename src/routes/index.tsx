import { Routes, Route, Navigate } from "react-router";
import { RegisterPage } from "../pages/register";
import Login from "../pages/Login";
import Profile from "../pages/UserProfile";
import LandingPage from "../pages/landingPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/landing" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<h1>dash</h1>}></Route>
        <Route path="/userProfile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;

