import { useEffect, useState, ReactNode } from "react";
import axios from "axios";
import CookiesManager from "../helpers/Cookiesmanager";
import { AuthContext } from "../context/AuthContext";

function AuthProvider({ children }: { children: ReactNode }) {
    const [email, setEmail] = useState<string | null>(null);
    const [photo, setPhoto] = useState<string | null>(null); 
    const [token, setToken] = useState<string | null>(null);

    const logout = () => {
        CookiesManager.deleteCookie("token");
        setEmail(null);
        setToken(null);
    };

    useEffect(() => {
        const token = CookiesManager.getCookie("token");
        if (!token) return;

        axios.get("http://localhost:8080/api/auth/verify-user", {
            headers: {"x-access-token": `${token}`},
        })
        .then((res) => {
            const {email, photo} = res.data;
            setEmail(email);
            setPhoto(photo);
            setToken(token);
        })
        .catch((err) => {
            console.log(err);
        });
    },[token]);

    return (
        <AuthContext.Provider value={{
            email, photo, token, 
            setEmail, setPhoto, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 