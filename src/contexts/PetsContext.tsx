import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { iEditFormPet } from "../components/Modal/EditPetsProfile";
import { instance } from "../services/api";
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
  const [petsList, setPetsList] = useState([] as iPetList[]);
  const [petsInfo, setPetsInfo] = useState<iEditFormPet | null>(null);

  const addPet = async (data: iAddPet): Promise<void> => {
    console.log(data);
    try {
      const token = localStorage.getItem("@TOKEN");

      const response = await instance.post("/pets", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

  const userPetsList = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const response = await instance.get(`/users/${user?.id}/pets`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
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

  const editPets = async (data: iEditFormPet) => {
    const newData = {
      ...data,
    };

    try {
      const token = localStorage.getItem("@TOKEN");

      const response = await instance.patch(`/pets/${petsInfo?.id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

  const deletePet = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const response = await instance.delete(`/pets/${petsInfo?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

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
