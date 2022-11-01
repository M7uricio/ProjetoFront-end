import { createContext, useState} from "react";

interface iUserContextProps{
    children: React.ReactNode
}

interface iUserContext{
    
}

interface iUser{

}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {


    const [user, setUser] = useState<iUser | null>(null)
    

    async function registerFunction(){
       
    }

    async function loginFunction(){

    }

    function logoutFunction(){

    }

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
        <UserContext.Provider value={{ }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider 