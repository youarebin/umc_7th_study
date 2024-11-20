import styled from 'styled-components';

export const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    width: 500px;

    .id {
        font-weight: bold;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    padding: 20px;
    height: 50px;
    font-size: 15px;
    cursor: pointer;
`;  