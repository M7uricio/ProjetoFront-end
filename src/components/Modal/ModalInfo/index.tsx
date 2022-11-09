import React, { useContext } from "react";
import { ServiceContext } from "../../../contexts/ServicesContext";
import Modal from "react-modal";
import {
  CarouselImages,
  CloseIcon,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalStyle,
} from "./style";

const ModalInfo = () => {
  const { serviceClick, modal, setModal } = useContext(ServiceContext);

  function closeModal() {
    setModal(false);
  }
  Modal.setAppElement("#root");

  return (
    <ModalContainer>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={ModalStyle}
        /*         style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "120px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            zIndex: 2,
          },
        }} */
      >
        <div>
          <ModalClose onClick={closeModal}>
            <CloseIcon />
          </ModalClose>
        </div>

        <ModalHeader>
          <h1>{serviceClick.servicename}</h1>
          <figure>
            <img src={serviceClick.logo} alt="" />
          </figure>

          <h3>{serviceClick.description}</h3>
        </ModalHeader>

        <CarouselImages>
          <li>
            <img src={serviceClick?.images} alt="" />
          </li>
        </CarouselImages>
        <ModalFooter>
          <p>Telefone: {serviceClick.phone}</p>
          <p>CNPJ: {serviceClick.cnpj}</p>
          <p>Serviços: {serviceClick.typeofservice}</p>
        </ModalFooter>
      </Modal>
    </ModalContainer>
  );
};

export default ModalInfo;
