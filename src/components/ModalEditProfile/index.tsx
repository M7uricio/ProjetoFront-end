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

export const ModalEditProfile = ({children}: iModalProps) => {
    const {modalEditProfile, closeModalEditProfile} = useContext(ProviderContext)

    return(
        <Modal
          isOpen={modalEditProfile}
          onRequestClose={closeModalEditProfile}
          style={customStyles}
        >
          <span onClick={() => closeModalEditProfile()}>x</span>
          <h1>Edição de serviço</h1>
          <p>atualize as informações do serviço</p>
           {children}   
        </Modal>
    )
}