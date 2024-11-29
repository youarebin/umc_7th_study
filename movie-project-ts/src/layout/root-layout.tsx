import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar";
import SideBar from "../components/side-bar";
import { useQuery } from '@tanstack/react-query';
import { useAuth } from "../context/LoginContext";
import axios from "axios";
import { useEffect, useState } from "react";

const RootLayout = () => {
    const {isLogin, logout} = useAuth();
    const [nickname, setNickname] = useState('');

    const {data, status} = useQuery({
        queryKey: ['user', 'me'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:3000/user/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            // if(response.data && isLogin) {
            //     const data = response.data
            //     setNickname(data.email.split('@')[0]);
            // }
            return response.data;
        },
        enabled: isLogin,
    });

    useEffect(() => {
        if (status === 'success' && data && isLogin) {
            setNickname(data.email.split('@')[0]);
        }
    }, [data, status, isLogin]);


    return (
        <>
            <Navbar isLogin={isLogin} nickname={nickname} logout={logout} />     
            <MainContentWrapper>
                <SideBar />
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </MainContentWrapper>
        </>
    );
;}

export default RootLayout;

const MainContentWrapper = styled.div`
    display: flex;
    margin-top: 70px; /* Navbar height */
`;

const ContentWrapper = styled.div`
    flex-grow: 1;
    min-height: 100vh; /* 최소 높이 설정 */
    overflow-y: auto; /* 세로 스크롤 허용 */
    padding: 20px;
    margin-left: 200px; /* Sidebar width */
    background-color: black;
`;