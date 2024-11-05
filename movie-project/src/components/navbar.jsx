// navbar.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const UserInfo = async() => {
            const accessToken = localStorage.getItem('accessToken');

            if(!accessToken) {
                alert('로그인을 해야합니다');
            }

            try{
                const response = axios.get('http://localhost:3000/user/me', {
                    headers: {
                        Authorization:`Bearer ${accessToken}`,
                    }
                });
                setUserInfo(response.data);
            } catch(error) {
                console.error(error);
            }
        }
    }, []);

    const handleLogout = () => {
        // 토큰 삭제
        localStorage.removeItem('accessToken'); 
        localStorage.removeItem('refreshToken')
        setUserInfo(null); // 유저 정보 초기화
    };

    return (
        <Nav>
            <Link to={'/'}>YONGCHA</Link>
            <Right>
                {userInfo ? (
                    <>
                        <span>{userInfo.email}님 반갑습니다.</span>
                        <button onClick={handleLogout}>로그아웃</button>
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