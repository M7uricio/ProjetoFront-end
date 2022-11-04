import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iRegisterUser } from "../pages/register";
import { instance } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { iLoginFormData } from "../pages/Login";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  registerUserFunction: (data: iRegisterUser) => void;
  loginFunction: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser | null;
}

interface iUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  type: string;
}
interface iApiError {
  error: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  const registerUserFunction = async (data: iRegisterUser) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
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

  const loginFunction = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await instance.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      if (response.data.user.type === "user") {
        navigate("/register");
      } else {
        navigate("/landing");
      }
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    } finally {
      setLoading(false);
    }
  };

  const logoutFunctio = async () => {};

  /* EXEMPLO DE AUTOLOGIN
    
    useEffect(() => {

        async function loginUser(){
            const token = localStorage.getItem("@kenziehub:TOKEN")

            if(token){
                try {
                    const profile = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(profile.data)
                    setToken(token)
                } catch {
                    localStorage.removeItem("@kenziehub:TOKEN")
                }
            }

            setLoading(false)
        }
        loginUser()
    },[]) */

  return (
    <UserContext.Provider value={{ registerUserFunction, loginFunction, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
