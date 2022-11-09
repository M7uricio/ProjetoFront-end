import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ServiceProvider from "../../contexts/ServicesContext";
import ModalProvider from "../../contexts/ModalContext";
import PetProvider from "../../contexts/PetsContext";
import ProviderService from "../../contexts/ServiceProviderContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return null;
  }

  return user ? (
    <ServiceProvider>
      <PetProvider>
        <ModalProvider>
          <ProviderService>
           <Outlet />
          </ProviderService>
        </ModalProvider>
      </PetProvider>
    </ServiceProvider>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
