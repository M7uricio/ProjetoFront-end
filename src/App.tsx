import React from "react";

import Global from "./styles/global";
import Routes from "./routes";
import UserProvider from "./contexts/UserContext";
import { StyledToast } from "./components/Toastify";

const App = () => {
  return (
    <>
      <Global />
      <StyledToast />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};

export default App;
