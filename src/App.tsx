import React from "react";
import Global from "./styles/global";
import Routes from "./routes";
import UserProvider from "./contexts/UserContext";
import { StyledToast } from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceProvider from "./contexts/ServicesContext";

const App = () => {
  return (
    <>
      <Global />
      <StyledToast />
      <ServiceProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ServiceProvider>
    </>
  );
};

export default App;
