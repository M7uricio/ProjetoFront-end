import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  registerCompanyFunction: (data: iRegisterUser) => void
  userLoginFunction: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser | null;
  loading: boolean;
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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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
    userProfile();
  }, []);

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

  const registerCompanyFunction = async (data: iRegisterUser) => {
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

      console.log(user);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    } finally {
      setLoading(false);
    }
  };

  const logoutFunctio = async () => {};

  const userEditProfile = async (data: any) => {
    let newData : any = {
              
    };
   let arrayUser : string []  = [];

   Object.keys(data).forEach((key) => {
    const category = data[key];
    if (category !== "") {
      arrayUser.push(key);
    }
  });
  arrayUser.forEach((key) => {
    newData[key] = data[key];
  });

    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const response = await instance.patch(`/users/${user?.id}`, newData, {
        
      });
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };

  return (
    <UserContext.Provider
      value={{ userRegisterFunction, userLoginFunction, user, userEditProfile,registerCompanyFunction, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
