import styled from "styled-components";

export const Container = styled.article`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
`

export const Img = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
`

export const H4 = styled.h4`
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
`   

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin: 0 auto;
        font-size: 16px;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: none; 
    padding: 0;
    cursor: pointer;  /* 클릭 가능한 아이콘 */
    display: inline-flex;
    justify-content: center; 
    align-items: center; 

    svg {
        width: 24px;
        height: 24px;
        border-color: #6e6cc6;
    }
`;