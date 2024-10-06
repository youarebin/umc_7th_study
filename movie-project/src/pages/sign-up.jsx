import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    padding-top: 70px;
    padding-left: 200px;
    color: white;
`

const SignUp = () => {
    return (
        <Container>
            <div>회원가입</div>
        </Container>
    );
};

export default SignUp;