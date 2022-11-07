import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../services/api";
import { UserContext } from "./UserContext";

interface iServiceContextProps {
  children: React.ReactNode;
}
export interface iDataCategory {
  cnpj: string;
  description: string;
  id: number;
  images: string[];
  logo: string;
  phone: string;
  servicename: string;
  typeofservice: string;
  userId: number;
}
interface iServiceContext {
  newNavBar: () => iDataCategory[];
  servicesList: iDataCategory[];
  newServicesListBtn: iDataCategory[];
  newServiceListInput: iDataCategory[];
  setSearchBtn: React.Dispatch<React.SetStateAction<string>>;
  setRenderList: React.Dispatch<React.SetStateAction<iDataCategory[]>>;
  renderList: iDataCategory[];
  searchBtn: string;
  dataValueInput: string;
  setDataValueInput: React.Dispatch<React.SetStateAction<string>>;
  searchResults: iDataCategory[];
  setSearchResults: React.Dispatch<React.SetStateAction<iDataCategory[]>>;
  serviceClick: iDataCategory;
  setServiceClick: React.Dispatch<React.SetStateAction<iDataCategory>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
}

export const ServiceContext = createContext<iServiceContext>(
  {} as iServiceContext
);

const ServiceProvider = ({ children }: iServiceContextProps) => {
  const [dataValueInput, setDataValueInput] = useState("");
  const [searchResults, setSearchResults] = useState<iDataCategory[]>([]);
  const [serviceClick, setServiceClick] = useState({} as iDataCategory);
  const [servicesList, setServicesList] = useState<iDataCategory[]>([]);
  const [searchBtn, setSearchBtn] = useState("");
  const [renderList, setRenderList] = useState<iDataCategory[]>([]);
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getServices = async () => {
      try {
        const { data } = await instance.get(`/services/`);
        setServicesList(data);
        setRenderList(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
        }
      }
    };

    if (user !== null) {
      getServices();
    }
  }, [user]);

  const newNavBar = () =>
    servicesList.filter(
      (service, index) =>
        servicesList.findIndex(
          (element) => element.typeofservice === service.typeofservice
        ) === index
    );

  const newServicesListBtn = servicesList.filter((item) =>
    searchBtn === ""
      ? true
      : item.typeofservice.toLowerCase().includes(searchBtn.toLowerCase())
  );
  const newServiceListInput = servicesList.filter((item) =>
    dataValueInput === ""
      ? true
      : item.servicename
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(dataValueInput.toLowerCase()) ||
        item.typeofservice
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(dataValueInput.toLowerCase()) ||
        item.description
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(dataValueInput.toLowerCase())
  );

  function openModal() {
    setModal(true);
  }
  console.log(serviceClick);
  return (
    <ServiceContext.Provider
      value={{
        servicesList,
        newNavBar,
        newServicesListBtn,
        newServiceListInput,
        setSearchBtn,
        renderList,
        setRenderList,
        searchBtn,
        dataValueInput,
        setDataValueInput,
        searchResults,
        setSearchResults,
        serviceClick,
        setServiceClick,
        openModal,
        setModal,
        modal,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
