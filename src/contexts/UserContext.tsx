import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginFormData } from "../pages/Login";
import { coreApi } from "../services/api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  loginFunction: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

interface iUser {
  user: iUser | null;
}
interface iApiError {
  error: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();
  const registerFunction = async () => {};

  const loginFunction = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await coreApi.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      if (response.data.user.type === "user") {
        navigate("/register");
      } else {
        navigate("/landing");
      }
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError)
      
    }finally{
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
    <UserContext.Provider
      value={{
        loginFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
