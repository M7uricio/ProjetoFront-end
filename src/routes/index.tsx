import { Routes, Route, Navigate } from "react-router";
import LandingPage from "../pages/landingPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/landing" />} />
      <Route path="/login" element={<h1>login</h1>} />
      <Route path="/register" element={<h1>register</h1>} />
      <Route path="/landing" element={<LandingPage />} />

      <Route path="/dashboard" element={<h1>dash</h1>}></Route>
    </Routes>
  );
};

export default RoutesMain;
