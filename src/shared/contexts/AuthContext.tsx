import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { Enviroment } from "../enviroment"
import { AuthService } from "../services/api/auth/AuthService"

interface IAuthContextData{
    isAutentication: boolean,
    login: (user: string, password: string) => Promise<string | void>,
    logout: () => void
}
interface EventProviderProps {
    children: React.ReactNode
}
const AuthContext = createContext({} as IAuthContextData)


export function AuthProvider( { children }: EventProviderProps ) {
    const [acessToken, setAcessToken] = useState<string>()

    useEffect(() => {
        const acessToken = localStorage.getItem(Enviroment.LOCAL_STORAGE_ACCESS_TOKEN)
        console.log(acessToken)
        if(acessToken){
            setAcessToken(acessToken);
        }else{
            setAcessToken(undefined)
        }
    }, [])

    const handlerLogin = useCallback(async (user: string, password: string) => { 
        const result = await  AuthService.auth(user, password)


        if (result instanceof Error){
            console.log(user)
            return result.message
        }else{
            localStorage.setItem(Enviroment.LOCAL_STORAGE_ACCESS_TOKEN, JSON.stringify(result.token))
            localStorage.setItem(Enviroment.DADOS_USER, JSON.stringify(result))
            
            setAcessToken(result.token)
        }

    }, [])
    const handlerLogout = useCallback( () => { 
        localStorage.removeItem(Enviroment.LOCAL_STORAGE_ACCESS_TOKEN)
        setAcessToken(undefined)
    }, [])

    const isAutentication = useMemo(() => !!acessToken, [acessToken])
    return (
        <AuthContext.Provider value={{isAutentication, login:handlerLogin, logout:handlerLogout} }>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext(AuthContext)