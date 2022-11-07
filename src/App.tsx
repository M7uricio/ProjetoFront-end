import React from "react";
import Global from "./styles/global";
import Routes from "./routes";
import UserProvider from "./contexts/UserContext";
import { StyledToast } from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";
import { RenderProvider } from "./contexts/RenderContext";

const App = () => {
  return (
    <>
      <Global />
      <StyledToast />
      <UserProvider>
        <RenderProvider>
          <Routes />
        </RenderProvider>
      </UserProvider>
    </>
  );
};

export default App;
