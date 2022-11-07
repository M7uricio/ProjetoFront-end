import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ServiceProvider from "../../contexts/ServicesContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return null;
  }

  return user ? (
    <ServiceProvider>
      <Outlet />
    </ServiceProvider>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
