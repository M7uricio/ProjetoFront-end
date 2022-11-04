import axios from "axios";
import { createContext, useEffect, useState } from "react";
interface iServiceContextProps {
  children: React.ReactNode;
}
interface iDataCategory {
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
  dataValueInput: string;
  setDataValueInput: React.Dispatch<React.SetStateAction<string>>;
  servicesSearchBar: iDataCategory[];
  searchResults: iDataCategory[];
  setSearchResults: React.Dispatch<React.SetStateAction<iDataCategory[]>>;
  serviceClick: iDataCategory[];
  setServiceClick: React.Dispatch<React.SetStateAction<iDataCategory[]>>;
  filtredItems: iDataCategory[];
}
interface iDataCategory {
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
export const ServiceContext = createContext<iServiceContext>(
  {} as iServiceContext
);

const ServiceProvider = ({ children }: iServiceContextProps) => {
  const [servicesSearchBar, setServicesSearchBar] = useState<iDataCategory[]>(
    []
  );
  const [dataValueInput, setDataValueInput] = useState("");
  const [searchResults, setSearchResults] = useState<iDataCategory[]>([]);
  const [serviceClick, setServiceClick] = useState<iDataCategory[]>([]);

  const filtredItems = servicesSearchBar.filter((element) => {
    const value = element.servicename
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(dataValueInput.toLowerCase());

    const valueTypeOfService = element.typeofservice
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(dataValueInput.toLowerCase());

    const valueDescription = element.description
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(dataValueInput.toLowerCase());
    return value || valueTypeOfService || valueDescription;
  });

  useEffect(() => {
    try {
      axios
        .get(`https://pets-json-server-m3.herokuapp.com/services`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => setServicesSearchBar(res.data));
    } catch (error) {}
  }, []);
  return (
    <ServiceContext.Provider
      value={{
        dataValueInput,
        setDataValueInput,
        servicesSearchBar,
        searchResults,
        setSearchResults,
        serviceClick,
        setServiceClick,
        filtredItems,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
