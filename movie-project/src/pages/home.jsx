import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
    color: white;
`

const HomePage = () => {
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

    return (
        <Container>
            <div>Home Page 야호~!</div>
        </Container>

    );
};

export default HomePage;
