import React, { useContext } from "react";
import Modal from "react-modal";
import { ModalContext } from "../../../contexts/ModalContext";

Modal.setAppElement("#root");

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface iModalProps {
  children: React.ReactNode;
}

export const ModalEditService = ({ children }: iModalProps) => {
  const { modalEdit, closeModalEditService } = useContext(ModalContext);

  return (
    <Modal
      isOpen={modalEdit}
      onRequestClose={closeModalEditService}
      style={customStyles}
    >
      <span onClick={() => closeModalEditService()}>x</span>
      <h1>Edição de serviço</h1>
      <p>atualize as informações do serviço</p>
      {children}
    </Modal>
  );
};
