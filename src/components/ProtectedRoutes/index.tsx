import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { CommentProvider } from "../../contexts/CommentContext";
import ServiceProvider from "../../contexts/ServicesContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (user !== null) {
    return null;
  }

  return user !== null ? (
    <ServiceProvider>
      <CommentProvider>
        <Outlet />
      </CommentProvider>
    </ServiceProvider>
  ) : (
    <Navigate to="*" replace state={{ from: location }} />
  );
};
