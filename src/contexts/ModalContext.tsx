import { createContext, useContext, useState } from "react";
import { iEditFormPet } from "../components/Modal/EditPetsProfile";
import { petsContext } from "./PetsContext";

interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalContext {
  openModaladdpet: () => void;
  modalIsOpen: boolean;
  closeModaladdpet: () => void;
  modalEditOpen: boolean;
  openModalEditUser: () => void;
  closeModalEditUser: () => void;
  modalEditPetOpen: boolean;
  openModalEditPet: (data: iEditFormPet) => void;
  closeModalEditPet: () => void;
}

export const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalContextProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEditOpen, setIsEditOpen] = useState(false);
  const [modalEditPetOpen, setIsEditPetOpen] = useState(false);
  const { setPetsInfo } = useContext(petsContext);

  const openModaladdpet = (): void => {
    setIsOpen(true);
  };

  const closeModaladdpet = (): void => {
    setIsOpen(false);
  };

  const openModalEditUser = (): void => {
    setIsEditOpen(true);
  };

  const closeModalEditUser = (): void => {
    setIsEditOpen(false);
  };

  const openModalEditPet = (data: iEditFormPet): void => {
    setIsEditPetOpen(true);
    setPetsInfo(data);
  };

  const closeModalEditPet = (): void => {
    setIsEditPetOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModaladdpet,
        closeModaladdpet,
        modalEditOpen,
        openModalEditUser,
        closeModalEditUser,
        modalEditPetOpen,
        openModalEditPet,
        closeModalEditPet,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
