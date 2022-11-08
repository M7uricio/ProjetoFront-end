import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iRegisterUser } from "../pages/register";
import { instance } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { iLoginFormData } from "../pages/Login";
import { ieditForm } from "../components/Modal/EditProfileUser";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  userRegisterFunction: (data: iRegisterUser) => void;
  userLoginFunction: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser | null;
  userEditProfile: (data: ieditForm) => void;
}

interface iUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  type: string;
  password: string;
}
interface iApiError {
  error: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  const userRegisterFunction = async (data: iRegisterUser) => {
    const newData = {
      ...data,
      type: "user",
    };
    const id = toast.loading("Please wait...");
    try {
      await instance.post("/register", newData);
      toast.update(id, {
        render: `Cadastro realizado com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === "Email already exists")
          toast.update(id, {
            render: `E-mail já existe`,
            type: "error",
            isLoading: false,
            autoClose: 1000,
          });
        console.error(error);
      }
    }
  };

  const userLoginFunction = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await instance.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      if (response.data.user.type === "user") {
        navigate("/userProfile");
      } else {
        navigate("/landing");
      }

      console.log(user);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    } finally {
      setLoading(false);
    }
  };

  const logoutFunctio = async () => {};

  const userEditProfile = async (data: ieditForm) => {
    const newData = {
      ...data,
      type: user?.type,
      
    };

    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await instance.patch(`/users/${user?.id}`, newData, {
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
    <UserContext.Provider
      value={{ userRegisterFunction, userLoginFunction, user, userEditProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
