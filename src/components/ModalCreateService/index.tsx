import React, { useContext } from "react"
import Modal from "react-modal";
import { ProviderContext } from "../../contexts/ServiceProviderContext";

Modal.setAppElement("#root");

export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  interface iModalProps{
    children: React.ReactNode
  }

export const ModalCreateService = ({children}: iModalProps) => {
    const {modalCreate, closeModalCreateService} = useContext(ProviderContext)

    return(
        <Modal
          isOpen={modalCreate}
          onRequestClose={closeModalCreateService}
          style={customStyles}
        >
          <span onClick={() => closeModalCreateService()}>x</span>
          <h1>Cadastro de serviço</h1>
          <p>cadastre um novo serviço na sua página</p>
           {children}   
        </Modal>
    )
}