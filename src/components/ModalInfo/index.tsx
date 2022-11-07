import React, { useContext } from "react";
import { ServiceContext } from "../../contexts/ServicesContext";
import Modal from "react-modal";

const ModalInfo = () => {
  const { serviceClick, modal, setModal } = useContext(ServiceContext);

  function closeModal() {
    setModal(false);
  }
  Modal.setAppElement("#root");
  console.log(serviceClick);
  return (
    <div>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <h1>{serviceClick?.cnpj}</h1>
        <span>{serviceClick.images}</span>
      </Modal>
    </div>
  );
};

export default ModalInfo;
