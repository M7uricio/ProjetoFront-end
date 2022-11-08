import React from "react";
import Global from "./styles/global";
import Routes from "./routes";
import UserProvider from "./contexts/UserContext";
import { StyledToast } from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceProvider from "./contexts/ServicesContext";
import ModalProvider from "./contexts/ModalContext";

import ReactDOM from "react-dom";
import Modal from "react-modal";
import PetProvider from "./contexts/PetsContext";

Modal.setAppElement("#root");
const App = () => {
  return (
    <>
      <Global />
      <StyledToast />
      <UserProvider>
        <PetProvider>
          <ModalProvider>
            <Routes />
          </ModalProvider>
        </PetProvider>
      </UserProvider>
    </>
  );
};

export default App;
