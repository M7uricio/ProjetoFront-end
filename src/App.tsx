import React from "react";
import Global from "./styles/global";
import Routes from "./routes";
import UserProvider from "./contexts/UserContext";
import { StyledToast } from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "./contexts/ModalContext";

import ReactDOM from "react-dom";
import Modal from "react-modal";
import PetProvider from "./contexts/PetsContext";
import ProviderService from "./contexts/ServiceProviderContext";

Modal.setAppElement("#root");
const App = () => {
  return (
    <>
      <Global />
      <StyledToast />
      <ProviderService>
      <UserProvider>
        <Routes/>
      </UserProvider>
      </ProviderService>
    </>
  );
};

export default App;
