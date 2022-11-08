import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { iRegisterUser } from "../pages/register";
import { instance } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { iLoginFormData } from "../pages/Login";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  userRegisterFunction: (data: iRegisterUser) => void;
  userRegisterCompanyFunction: (data: iRegisterUser) => void;
  userLoginFunction: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser | null;
  loading: boolean;
  size: number;
}

interface iUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  password: string;
  type: string;
}
interface iApiError {
  error: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const userProfile = async () => {
    const token = localStorage.getItem("@NetPetToken:");
    const tokenId = localStorage.getItem("@NetPetId:");
    try {
      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await instance.get(`/users/${tokenId}`);
      setUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    setSize(window.innerWidth);
    userProfile();
  }, []);

  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });

  const userRegisterFunction = async (data: iRegisterUser) => {
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
        autoClose: 1500,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === "Email already exists")
          toast.update(id, {
            render: `E-mail já existe`,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        console.error(error);
      }
    }
  };

  const userRegisterCompanyFunction = async (data: iRegisterUser) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      type: "service",
    };

    const id = toast.loading("Please wait...");
    try {
      await instance.post("/register", newData);
      toast.update(id, {
        render: `Cadastro realizado com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === "Email already exists")
          toast.update(id, {
            render: `E-mail já existe`,
            type: "error",
            isLoading: false,
            autoClose: 1500,
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
      localStorage.setItem("@NetPetToken:", response.data.accessToken);
      localStorage.setItem("@NetPetId:", response.data.user.id);
      const toNavigate = location.state?.from.pathname || "dashboard";
      if (response.data.user.type === "user") {
        navigate(toNavigate, { replace: true });
      } else {
        navigate("/");
      }
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    } finally {
      setLoading(false);
    }
  };

  const userLogoutFunction = async () => {};

  return (
    <UserContext.Provider
      value={{
        userRegisterFunction,
        userLoginFunction,
        userRegisterCompanyFunction,
        user,
        loading,
        size,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
