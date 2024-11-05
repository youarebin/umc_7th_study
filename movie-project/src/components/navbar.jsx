// navbar.jsx
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
    // const [userInfo, setUserInfo] = useState(null);
    // const [isLogin, setIsLogin] = useState(false);

    // useEffect(() => {
    //     const UserInfo = async() => {
    //         const accessToken = localStorage.getItem('accessToken');

    //         if(!accessToken) return;

    //         try{
    //             const response = await axios.get('http://localhost:3000/user/me', {
    //                 headers: {
    //                     Authorization:`Bearer ${accessToken}`,
    //                 }
    //             });
    //             setUserInfo(response.data);
    //             setIsLogin(true);
    //         } catch(error) {
    //             console.error(error);
    //         }
    //     }
    //     UserInfo();
    // }, [isLogin]);
    // console.log(isLogin)

    // const handleLogout = () => {
    //     if(isLogin) {
    //         // 토큰 삭제
    //         localStorage.removeItem('accessToken'); 
    //         localStorage.removeItem('refreshToken')
    //         setIsLogin(false);
    //         setUserInfo(null); // 유저 정보 초기화
    //     } else {
    //         setIsLogin(false);
    //     }

    // };
    const {
        userInfo,
        isLogin,
        handleLogout
      } = useContext(LoginContext);

    return (
        <Nav>
            <Link to={'/'}>YONGCHA</Link>
            <Right>
                {isLogin ? (
                    <>
                        <span className="email">{userInfo.email.split('@')[0]}님 반갑습니다.</span>
                        <div className="logout" onClick={handleLogout}>로그아웃</div>
                    </>
                ) : (
                    <>
                        <Link to="/login">로그인</Link>
                        <SignUpWrapper>
                            <Link to="/sign-up">회원가입</Link>
                        </SignUpWrapper>
                    </>
                )}
            </Right>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 100;
    width: 100vw;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background-color: #131517;
    color: red;
    padding: 0 20px;
    height: 70px;

    a {
        color: #e83261;
        text-decoration: none;
        margin: 0 5px;
        font-size: 20px;

        &: hover {
            color: white;
        }
    }
`;

const Right = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin-right: 60px;

    a {
        color: white;
        text-decoration: none;
        margin: 0 5px;
        font-size: 15px;
    }

    .email {
        color: white;
        font-weight: bold;
    }
    .logout {
        color: white;
        cursor: pointer;
    }
`;

const SignUpWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e83261;
    border-radius: 5px;
    width: 90px;
    height: 40px;

    &:hover {
        background-color: blue;
    }
`;

const Email = styled.span`
    color: white;
`;