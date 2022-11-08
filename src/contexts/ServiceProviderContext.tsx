import { createContext, useState } from "react";

interface iCouterContextProps {
  children: React.ReactNode;
}

interface iProviderContext {
  modalCreate: boolean;
  setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  openModalCreateService: () => void;
  closeModalCreateService: () => void;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  openModalEditService: () => void;
  closeModalEditService: () => void;
  serviceId: number;
  setServiceId: React.Dispatch<React.SetStateAction<number>>;
  modalEditProfile: boolean,
  setModalEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  openModalEditProfile: () => void;
  closeModalEditProfile: () => void;
}

export const ProviderContext = createContext<iProviderContext>({} as iProviderContext);

const ProviderService = ({ children }: iCouterContextProps) => {
  const [modalCreate, setModalCreate] = useState(false);
  const openModalCreateService = () => setModalCreate(true);
  const closeModalCreateService = () => setModalCreate(false);
  const [modalEdit, setModalEdit] = useState(false);
  const openModalEditService = () => setModalEdit(true);
  const closeModalEditService = () => setModalEdit(false);
  const [serviceId, setServiceId] = useState(0)
  const [modalEditProfile, setModalEditProfile] = useState(false)
  const openModalEditProfile = () => setModalEdit(true);
  const closeModalEditProfile = () => setModalEdit(false);


  return (
    <ProviderContext.Provider value={{
      modalCreate,
      setModalCreate,
      openModalCreateService,
      closeModalCreateService,
      modalEdit,
      setModalEdit,
      openModalEditService,
      closeModalEditService,
      serviceId,
      setServiceId,
      modalEditProfile,
      setModalEditProfile,
      openModalEditProfile,
      closeModalEditProfile,
      }}>
        {children}
    </ProviderContext.Provider>
  );
};

export default ProviderService;