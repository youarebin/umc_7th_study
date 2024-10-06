// navbar.jsx
import {Link} from "react-router-dom";
import styled from "styled-components";

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
`;

const Navbar = () => {
    return (
        <Nav>
            <Link to={'/'}>YONGCHA</Link>
            <Right>
                <div>
                    <Link to='/login'>로그인</Link>                
                </div>
                <SignUpWrapper>
                    <Link to='/sign-up'>회원가입</Link>                
                </SignUpWrapper>
            </Right>
        </Nav>
    );
};

export default Navbar;
