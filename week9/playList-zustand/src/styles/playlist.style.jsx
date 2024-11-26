import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1000px;
    margin: 0 auto;
    padding: 20px 100px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        margin: 0; /* 기본 마진 제거 */
    }
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    hr {
        width: 100%;
        border-color: black;
    }
`

export const PriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px; 
`;

export const Button = styled.button`
    border: 1.5px solid red;
    border-radius: 5px;
    color: red;
    width: 150px;
    padding: 7px 10px;
    cursor: pointer;
    background-color: white;
`;