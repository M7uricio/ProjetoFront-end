import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { iEditFormPet } from "../components/Modal/EditPetsProfile";
import { instance } from "../services/api";
import { ModalContext } from "./ModalContext";
import { UserContext } from "./UserContext";

export interface iPetContext {
  addPet: (data: iAddPet) => void;
  petsList: iPetList[];
  userPetsList: (
    data: iPetList,
    setPetsList: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  editPets: (data: iPetList) => void;
  petsInfo: null | iEditFormPet;
  setPetsInfo: React.Dispatch<React.SetStateAction<iEditFormPet | null>>;
  deletePet: () => void;
}

interface iApiError {
  error: string;
}
interface iPetContextProps {
  children: React.ReactNode;
}

interface iAddPet {
  userId: number;
  name: string;
  type: string;
  picture: string;
  race: string;
}

interface iPetList {
  id?: number;
  userId?: number;
  name?: string;
  type?: string;
  picture?: string;
  race?: string;
}

export const petsContext = createContext<iPetContext>({} as iPetContext);

const PetProvider = ({ children }: iPetContextProps) => {
  const { user } = useContext(UserContext);
  const {closeModaladdpet} = useContext(ModalContext)
  const [petsList, setPetsList] = useState([] as iPetList[]);
  const [petsInfo, setPetsInfo] = useState<iEditFormPet | null>(null);

  const addPet = async (data: iAddPet): Promise<void> => {
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`; 
      const response = await instance.post("/pets", data, {
        
      });
      userPetsList()
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

  const userPetsList = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`; 
      const response = await instance.get(`/users/${user?.id}/pets`, {
        
      });
      setPetsList(response.data);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

  useEffect(() => {
    userPetsList();
  }, [user]);

  const editPets = async (data: any) => {
    let newData : any = {
              
    };
   let arrayPets : string []  = [];

   Object.keys(data).forEach((key) => {
    const category = data[key];
    if (category !== "") {
      arrayPets.push(key);
    }
  });
  arrayPets.forEach((key) => {
    newData[key] = data[key];
  });
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const response = await instance.patch(`/pets/${petsInfo?.id}`, newData, {
        
      });
      userPetsList()
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

  const deletePet = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const response = await instance.delete(`/pets/${petsInfo?.id}`, {
        
      });
      userPetsList()
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

  /* const updatePetList = async () => {

  } */

  return (
    <petsContext.Provider
      value={{
        addPet,
        petsList,
        userPetsList,
        editPets,
        petsInfo,
        setPetsInfo,
        deletePet,
      }}
    >
      {children}
    </petsContext.Provider>
  );
};

export default PetProvider;
