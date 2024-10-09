import styled from "styled-components";

const Container = styled.div`
    width: calc(100vw - 200px); // SideBar 너비만큼 제외
    height: calc(100vh - 70px); // Navbar 높이만큼 제외
    background-color: black;
    margin-top: 70px; // Navbar 높이만큼 여백 추가
    margin-left: 200px; // SideBar 너비만큼 여백 추가
    color: white;
    overflow-y: auto;
`

const HomePage = () => {
    return (
        <Container>
            <div>Home Page 야호~!</div>
        </Container>

    );
};

export default HomePage;
