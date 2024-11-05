import { createContext, useState, useEffect } from "react"
import axios from "axios";

export const LoginContext = createContext();

export function LoginContextProvider({children}) {
    const [userInfo, setUserInfo] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const UserInfo = async() => {
            const accessToken = localStorage.getItem('accessToken');

            if(!accessToken) return;

            try{
                const response = await axios.get('http://localhost:3000/user/me', {
                    headers: {
                        Authorization:`Bearer ${accessToken}`,
                    }
                });
                setUserInfo(response.data);
                setIsLogin(true);
            } catch(error) {
                console.error(error);
            }
        }
        UserInfo();
    }, []);

    const handleLogout = () => {
        if(isLogin) {
            // 토큰 삭제
            localStorage.removeItem('accessToken'); 
            localStorage.removeItem('refreshToken')
            setIsLogin(false);
            setUserInfo(null); // 유저 정보 초기화
        } else {
            setIsLogin(false);
        }

    };

    return (
        <LoginContext.Provider value={{
            userInfo,
            setUserInfo,
            isLogin,
            setIsLogin,
            handleLogout
        }}>
            {children}
        </LoginContext.Provider>
    );
}