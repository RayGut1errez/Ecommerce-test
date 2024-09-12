import {  useState, useEffect, createContext, } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {

     const { children } = props;
     const [user, setUser] = useState(null);
     const [token, setToken] = useState(null);
     const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async (params) => {
            const token = tokenCtrl.getToken();

            if(!token){
                logout();
                setLoading(false);
                return;   
            }

            if (tokenCtrl.hasExpired(token)) {
                logout()
            } else {
                await login(token);
            }
        })()
    }, []);

     const login = async (token) => {
        try {
            // TODO: Setear el token en el localStorage
            tokenCtrl.setToken(token);
            // TODO: Obtener los datos del usuario
            const response = await userCtrl.getMe();
            console.log(response);
            
            // TODO: Setear los datos del usuario en le state user
            setUser( response );
            // TODO: Setear los datos del usuario en el state token
            setToken(token);
            // TODO: Hacer un setLoading false
            setLoading(false);

        } catch (error){
            console.error(error);
            setLoading(false);
        }
     };

            const logout = () => { //esta es la funcion para cerrar secion
                tokenCtrl.removeToken();
                setToken(null);
                setUser(null);
            };
            const updateUser = (key, value) => {
                setUser({
                    ...user,
                    [key]: value,
                })
            }

    const data = {//lO QUE ESTE DENTRO DE DATA ES LO QUE VAMOS A PODER ACCEDER DESDE CUALQUIER COMPONENTE HIJO 
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    };
    
        if (loading) return null;

    return (
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    );
} 