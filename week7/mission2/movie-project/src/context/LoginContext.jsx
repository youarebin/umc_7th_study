import { createContext, useState, useContext } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children }) => {
    const [isLogin, setIsLogin] = useState(!!localStorage.getItem('accessToken'))

    const Login = () => setIsLogin(true);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider value={{
            isLogin,
            Login,
            logout
        }}>
            {children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);