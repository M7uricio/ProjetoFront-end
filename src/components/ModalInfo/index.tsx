import React, { useContext } from "react";
import { ServiceContext } from "../../contexts/ServicesContext";
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
      >
        <ModalClose onClick={closeModal}>
          <CloseIcon />
        </ModalClose>
        <ModalHeader>
          <h1>{serviceClick.servicename}</h1>
          <figure>
            <img src={serviceClick.logo} alt="" />
          </figure>

          <h3>{serviceClick.description}</h3>
        </ModalHeader>

        <CarouselImages>
          {/*       <li>
            <img src={serviceClick?.images[0]} alt="" />
          </li>
          <li>
            <img src={serviceClick?.images[1]} alt="" />
          </li>
          <li>
            <img src={serviceClick?.images[2]} alt="" />
          </li> */}
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
